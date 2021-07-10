import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { CreateNoteGQL, GetNotesGQL, Notes } from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  public readonly selectedNote$: BehaviorSubject<Notes>;
  public readonly notes$: BehaviorSubject<Partial<Notes>[]>;

  constructor(
    private createNoteGQL: CreateNoteGQL,
    private getNotesGQL: GetNotesGQL
  ) {
    this.selectedNote$ = new BehaviorSubject(null);
    this.notes$ = new BehaviorSubject(null);
  }

  selectNote(note: Notes): void {
    this.selectedNote$.next(note);
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
    if (!characterId) {
      this.notes$.next(null);
      return null;
    }

    return this.getNotesGQL
      .watch({ character_id: characterId })
      .valueChanges.pipe(
        map((result) => result?.data?.notes),
        tap((notes) => this.notes$.next(notes))
      );
  }
}
