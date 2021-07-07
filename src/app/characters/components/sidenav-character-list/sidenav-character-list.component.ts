import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Observable, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { StateService } from "src/app/core/state/state.service";
import {
  CreateChronicleGQL,
  CreateCharacterGQL,
  GetChroniclesGQL,
} from "../../../../generated/graphql";
import { CreateNewCharacterDialogComponent } from "../create-new-character-dialog/create-new-character-dialog.component";
import { CreateNewChronicleDialogComponent } from "../create-new-chronicle-dialog/create-new-chronicle-dialog.component";

@Component({
  selector: "app-sidenav-character-list",
  templateUrl: "./sidenav-character-list.component.html",
  styleUrls: ["./sidenav-character-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavCharacterListComponent implements OnInit, OnDestroy {
  chronicles$: Observable<any[]>;
  chronicleSubscription$: Subscription;
  characterSubscription$: Subscription;
  constructor(
    public state: StateService,
    public dialog: MatDialog,
    private createChronicleGQL: CreateChronicleGQL,
    private createCharacterGQL: CreateCharacterGQL,
    private getChroniclesGQL: GetChroniclesGQL
  ) {}

  ngOnInit() {
    this.chronicles$ = this.getChroniclesGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.chronicles));
  }

  createNewChronicle() {
    const dialogRef = this.dialog.open(CreateNewChronicleDialogComponent, {
      width: "250px",
      data: {},
    });

    this.chronicleSubscription$?.unsubscribe();
    this.chronicleSubscription$ = dialogRef
      .afterClosed()
      .pipe(
        switchMap((res) => this.createChronicleGQL.mutate({ name: res?.name }))
      )
      .subscribe();
  }

  createNewCharacter() {
    const dialogRef = this.dialog.open(CreateNewCharacterDialogComponent, {
      width: "250px",
      data: {},
    });

    this.characterSubscription$?.unsubscribe();
    this.characterSubscription$ = dialogRef
      .afterClosed()
      .pipe(
        switchMap((res) => this.createCharacterGQL.mutate({ name: res?.name }))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.chronicleSubscription$?.unsubscribe();
    this.characterSubscription$?.unsubscribe();
  }
}
