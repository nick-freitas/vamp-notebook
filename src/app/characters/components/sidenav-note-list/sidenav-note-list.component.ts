import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MobileService } from "../../../core/mobile.service";
import { CharacterService } from "../../character.service";
import { NoteService } from "../../note.service";
import { SelectedViewService } from "../../selected-view.service";
import { CreateNewNoteDialogComponent } from "../create-new-note-dialog/create-new-note-dialog.component";

@Component({
  selector: "app-sidenav-note-list",
  templateUrl: "./sidenav-note-list.component.html",
  styleUrls: ["./sidenav-note-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavNoteListComponent {
  noteSubscription$: Subscription;

  constructor(
    public mobileService: MobileService,
    public characterService: CharacterService,
    public noteService: NoteService,
    public dialog: MatDialog,
    public selectedViewService: SelectedViewService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  createNewNote(characterId: string): void {
    const dialogRef = this.dialog.open(CreateNewNoteDialogComponent, {
      width: "250px",
      data: {},
    });

    this.noteSubscription$?.unsubscribe();
    this.noteSubscription$ = dialogRef
      .afterClosed()
      .pipe(
        switchMap((res) =>
          this.noteService.createNote({
            name: res?.name,
            characterId: characterId,
          })
        ),
        switchMap(() => this.noteService.refreshNoteList(characterId))
      )
      .subscribe(() => {
        // resetting chronicles$ does not trigger the change detection, so trigger it manually
        this.changeDetectorRef.markForCheck();
      });
  }
}
