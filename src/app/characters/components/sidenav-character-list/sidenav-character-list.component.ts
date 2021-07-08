import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Observable, Subscription } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { ChronicleService } from "../../chronicle.service";
import { CharacterService } from "../../character.service";

import { CreateNewCharacterDialogComponent } from "../create-new-character-dialog/create-new-character-dialog.component";
import { CreateNewChronicleDialogComponent } from "../create-new-chronicle-dialog/create-new-chronicle-dialog.component";
import { StateService } from "../../../core/state/state.service";

@Component({
  selector: "app-sidenav-character-list",
  templateUrl: "./sidenav-character-list.component.html",
  styleUrls: ["./sidenav-character-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavCharacterListComponent implements OnInit, OnDestroy {
  chronicles$: Observable<any[]>;
  characters$: Observable<any[]>;
  chronicleSubscription$: Subscription;
  characterSubscription$: Subscription;

  constructor(
    public dialog: MatDialog,
    public state: StateService,
    public chronicleService: ChronicleService,
    private characterService: CharacterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.chronicles$ = this.chronicleService.getChronicleList();
  }

  loadCharacterList(chronicleId) {
    this.characters$ = this.characterService.getCharacterList(chronicleId);
  }

  selectChronicle(chronicle) {
    this.chronicleService.selectChronicle(chronicle);
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
        switchMap((res) =>
          this.chronicleService.createChronicle({ name: res?.name })
        )
      )
      .subscribe(() => {
        this.chronicles$ = this.chronicleService.getChronicleList();
        // resetting chronicles$ does not trigger the change detection, so trigger it manually
        this.changeDetectorRef.detectChanges();
      });
  }

  createNewCharacter(chronicleId) {
    const dialogRef = this.dialog.open(CreateNewCharacterDialogComponent, {
      width: "250px",
      data: {},
    });

    this.characterSubscription$?.unsubscribe();
    this.characterSubscription$ = dialogRef
      .afterClosed()
      .pipe(
        switchMap((res) =>
          this.characterService.createCharacter({
            name: res?.name,
            chronicleId,
          })
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.chronicleSubscription$?.unsubscribe();
    this.characterSubscription$?.unsubscribe();
  }
}
