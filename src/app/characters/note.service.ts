import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, take, takeUntil, tap } from "rxjs/operators";
import {
  CreateNoteGQL,
  GetNotesGQL,
  Notes,
  UpdateNoteGQL,
  DeleteNoteGQL,
  UpdateNoteMutationVariables,
} from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  public readonly selectedNote$: BehaviorSubject<Notes>;
  public readonly notes$: BehaviorSubject<Partial<Notes>[]>;

  constructor(
    private createNoteGQL: CreateNoteGQL,
    private getNotesGQL: GetNotesGQL,
    private updateNotesGQL: UpdateNoteGQL,
    private deleteNoteGQL: DeleteNoteGQL
  ) {
    this.selectedNote$ = new BehaviorSubject(null);
    this.notes$ = new BehaviorSubject(null);
  }

  selectNote(note: Notes): void {
    this.selectedNote$.next(note);
  }

  updateNote(
    noteId: string,
    note: UpdateNoteMutationVariables
  ): Observable<Partial<Notes>> {
    if (!noteId || !note) {
      return of(null);
    }

    const newNote: UpdateNoteMutationVariables = {
      ...note,
      uuid: noteId,
    };

    return this.updateNotesGQL
      .mutate(newNote)
      .pipe(map((res) => res?.data?.update_notes_by_pk));
  }

  deleteNote(noteId: string): Observable<Partial<Notes>> {
    if (!noteId) return of(null);

    return this.deleteNoteGQL
      .mutate({ uuid: noteId })
      .pipe(map((res) => res?.data?.delete_notes_by_pk));
  }

  createNote({
    name,
    characterId,
  }: {
    name: string;
    characterId: string;
  }): Observable<Partial<Notes>> {
    if (!name || !characterId) {
      return of(null);
    }

    return this.createNoteGQL
      .mutate({
        name: name,
        character_id: characterId,
      })
      .pipe(map((result) => result?.data?.insert_notes_one));
  }

  refreshNoteList(characterId: string): Observable<Partial<Notes>[]> {
    console.log(characterId);
    if (!characterId) {
      this.notes$.next(null);
      return null;
    }

    return this.getNotesGQL
      .watch({ character_id: characterId })
      .valueChanges.pipe(
        map((result) => result?.data?.notes),
        tap(() => console.log('updating things')),
        tap((notes) => this.notes$.next(notes)),
        take(1)
      );
  }
}
