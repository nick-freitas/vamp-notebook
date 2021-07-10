import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ChronicleService } from "../../chronicle.service";
import { CharacterService } from "../../character.service";
import { CreateNewCharacterDialogComponent } from "../create-new-character-dialog/create-new-character-dialog.component";
import { CreateNewChronicleDialogComponent } from "../create-new-chronicle-dialog/create-new-chronicle-dialog.component";
import { StateService } from "../../../core/state/state.service";
import { NoteService } from "../../note.service";
import { Characters, Chronicles } from "../../../../generated/graphql";
import { SubSink } from "subsink";

@Component({
  selector: "app-sidenav-character-list",
  templateUrl: "./sidenav-character-list.component.html",
  styleUrls: ["./sidenav-character-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavCharacterListComponent implements OnInit, OnDestroy {
  chronicles$: Observable<any[]>;
  characters$: Observable<any[]>;
  characterAndNotesRefreshSubscription$: Subscription;
  chronicleSubscription$: Subscription;
  characterSubscription$: Subscription;
  // private subs = new SubSink();

  constructor(
    public dialog: MatDialog,
    public state: StateService,
    public chronicleService: ChronicleService,
    public characterService: CharacterService,
    private changeDetectorRef: ChangeDetectorRef,
    public noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.loadChronicleList();
  }

  onSelectChronicle(chronicle: Chronicles): void {
    this.chronicleService.selectChronicle(chronicle);
    this.state.closeCharacterListSidenav(true);
    this.loadCharacterList(chronicle?.uuid);
  }

  onSelectCharacter(characterId: string): void {
    this.state.closeCharacterListSidenav(true);
    this.characterAndNotesRefreshSubscription$?.unsubscribe();

    this.characterAndNotesRefreshSubscription$ = this.characterService
      .selectCharacterByCharacterId(characterId)
      .pipe(switchMap(() => this.noteService.refreshNoteList(characterId)))
      .subscribe(() => {
        // resetting chronicles$ does not trigger the change detection, so trigger it manually
        this.changeDetectorRef.markForCheck();
      });
  }

  loadChronicleList(): void {
    this.chronicles$ = this.chronicleService.getChronicleList();
  }

  loadCharacterList(chronicleId): void {
    this.characters$ = this.characterService.getCharacterList(chronicleId);
  }

  selectChronicle(chronicle): void {
    this.chronicleService.selectChronicle(chronicle);
  }

  createNewChronicle(): void {
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
        this.loadChronicleList();

        // resetting chronicles$ does not trigger the change detection, so trigger it manually
        this.changeDetectorRef.markForCheck();
      });
  }

  createNewCharacter(chronicleId): void {
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
      .subscribe(() => {
        this.loadCharacterList(chronicleId);

        // resetting chronicles$ does not trigger the change detection, so trigger it manually
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.chronicleSubscription$?.unsubscribe();
    this.characterSubscription$?.unsubscribe();
    this.characterAndNotesRefreshSubscription$?.unsubscribe();
  }
}
