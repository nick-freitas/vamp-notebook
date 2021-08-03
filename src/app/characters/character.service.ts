import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import {
  Characters,
  CreateCharacterGQL,
  GetCharactersGQL,
  GetFullCharacterGQL,
  UpdateCharacterSheetHeaderGQL,
  UpdateCharacterSheetHeaderMutationVariables,
} from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  public readonly selectedCharacter$: BehaviorSubject<Partial<Characters> | null>;

  constructor(
    private createCharacterGQL: CreateCharacterGQL,
    private getCharactersGQL: GetCharactersGQL,
    private getFullCharacter: GetFullCharacterGQL,
    private updateCharacterSheetHeaderGQL: UpdateCharacterSheetHeaderGQL
  ) {
    this.selectedCharacter$ = new BehaviorSubject(null);
  }

  updateCharacter(
    characterId: string,
    character: Characters
  ): Observable<Partial<Characters>> {
    if (!characterId || !character) {
      return of(null);
    }

    const newCharacter: UpdateCharacterSheetHeaderMutationVariables = {
      ...character,
      uuid: characterId,
    };

    return this.updateCharacterSheetHeaderGQL
      .mutate(newCharacter)
      .pipe(map((res) => res?.data?.update_characters_by_pk));
  }

  createCharacter({
    name,
    chronicleId,
  }: {
    name: string;
    chronicleId: string;
  }): Observable<Partial<Characters>> {
    if (!name || !chronicleId) {
      return of(null);
    }

    return this.createCharacterGQL
      .mutate({ name, chronicleid: chronicleId })
      .pipe(map((res) => res?.data?.insert_characters_one));
  }

  public resetCharacterSelector(): void {
    return this.selectedCharacter$.next(null);
  }

  public selectCharacterByCharacterId(
    characterId: string
  ): Observable<Partial<Characters>> {
    return this.fetchFullCharacter(characterId).pipe(
      tap((character) => this.selectedCharacter$.next(character))
    );
  }

  fetchFullCharacter(characterId: string): Observable<Partial<Characters>> {
    if (!characterId) {
      return of(null);
    }

    return this.getFullCharacter
      .watch({ uuid: characterId })
      .valueChanges.pipe(map((res) => res?.data?.characters_by_pk));
  }

  getCharacterList(chronicleId: string): Observable<Partial<Characters>[]> {
    return this.getCharactersGQL
      .watch({ chronicleid: chronicleId })
      .valueChanges.pipe(map((result) => result?.data?.characters));
  }
}
