import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import * as BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";
import { NoteService } from "../../note.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Notes } from "../../../../generated/graphql";
import { SubSink } from "subsink";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import { switchMap, switchMapTo, take, takeLast, takeUntil } from "rxjs/operators";
import { SelectedViewService } from "../../selected-view.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterService } from '../../character.service';

@Component({
  selector: "app-note-editor",
  templateUrl: "./note-editor.component.html",
  styleUrls: ["./note-editor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  public Editor = BalloonBlockEditor;
  public internalEditorContent: any;
  public noteForm: FormGroup;
  public selectedNote;
  private subs: SubSink;

  constructor(
    private noteService: NoteService,
    private characterService:CharacterService,
    private selectedViewService: SelectedViewService,
    private changeDetectionRef: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {
    this.subs = new SubSink();
    this.loadNote(null);
  }

  ngOnInit(): void {
    // look into a better way to do this...
    this.subs.add(
      this.noteService.selectedNote$.subscribe((note) => {
        this.internalEditorContent = note?.content || "Click here to type...";
        this.loadNote(note);
        this.selectedNote = note;
        this.changeDetectionRef.markForCheck();
      })
    );
  }

  onEditorChange({ editor }: ChangeEvent): void {
    const data = editor.getData();
    this.internalEditorContent = data;
  }

   public async onSaveNote(): Promise<void> {
     this.subs.unsubscribe();
    const updatedNote = {
      name: this.noteForm.value.name,
      content: this.internalEditorContent,
    };

    this.noteForm.disable();
    this.subs.add(this.noteService
      .updateNote(this.selectedNote.uuid, updatedNote)
      .pipe(
        switchMap(() => this.characterService.selectedCharacter$.asObservable()),
        switchMap((selectedCharacter) => this.noteService.refreshNoteList(selectedCharacter?.uuid)),
        takeLast(1),
      )
      .subscribe(() => {
        console.log('we');
        this.noteForm.enable();
        this.snackBar.open("Saved Notes", 'Close', {duration:3000});
        this.changeDetectionRef.markForCheck();
      }));
  }

  public onDeleteNote(): void {
    this.subs.add(
      this.noteService
        .deleteNote(this.selectedNote.uuid)
        .pipe(
          switchMap(() =>
            this.noteService.refreshNoteList(this.selectedNote.character_id)
          )
        )
        .subscribe(() => this.selectedViewService.leaveNoteView())
    );
  }

  public loadNote(note: Notes): void {
    this.noteForm = new FormGroup({
      name: new FormControl(note?.name),
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
