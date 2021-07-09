import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";
import { map } from "rxjs/operators";
import {
  Chronicles,
  CreateChronicleGQL,
  GetChroniclesGQL,
} from "../../generated/graphql";
import { CharacterService } from "./character.service";

@Injectable({
  providedIn: "root",
})
export class ChronicleService {
  selectedChronicle$: BehaviorSubject<Chronicles>;
  constructor(
    private createChronicleGQL: CreateChronicleGQL,
    private getChroniclesGQL: GetChroniclesGQL,
    private characterService: CharacterService
  ) {
    this.selectedChronicle$ = new BehaviorSubject(null);
  }

  selectChronicle(chronicle: Chronicles): void {
    this.selectedChronicle$.next(chronicle);
    this.characterService.resetCharacterSelector();
  }

  createChronicle({ name }: { name: string }): Observable<Partial<Chronicles>> {
    if (!name) {
      return of(null);
    }

    return this.createChronicleGQL
      .mutate({ name: name })
      .pipe(map((res) => res?.data?.insert_chronicles_one));
  }

  getChronicleList(): Observable<Partial<Chronicles>[]> {
    return this.getChroniclesGQL
      .watch()
      .valueChanges.pipe(map((result) => result?.data?.chronicles));
  }
}
