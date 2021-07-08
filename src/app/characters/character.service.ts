import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { CreateCharacterGQL, GetCharactersGQL } from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(
    private createCharacterGQL: CreateCharacterGQL,
    private getCharactersGQL: GetCharactersGQL
  ) {}

  createCharacter({ name, chronicleId }) {
    return this.createCharacterGQL.mutate({ name, chronicleid: chronicleId });
  }

  getCharacterList(chronicleId) {
    return this.getCharactersGQL
      .watch({ chronicleid: chronicleId })
      .valueChanges.pipe(map((result) => result?.data?.characters));
  }
}
