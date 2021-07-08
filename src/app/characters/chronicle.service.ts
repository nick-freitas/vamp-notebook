import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BehaviorSubject, of } from "rxjs";
import { CreateChronicleGQL, GetChroniclesGQL } from "../../generated/graphql";

@Injectable({
  providedIn: "root",
})
export class ChronicleService {
  selectedChronicle$: BehaviorSubject<any>;
  constructor(
    private createChronicleGQL: CreateChronicleGQL,
    private getChroniclesGQL: GetChroniclesGQL
  ) {
    this.selectedChronicle$ = new BehaviorSubject(null);
  }

  selectChronicle(chronicle) {
    this.selectedChronicle$.next(chronicle);
  }

  createChronicle({ name }) {
    if (name) {
      return this.createChronicleGQL.mutate({ name: name });
    }

    return of(null);
  }

  getChronicleList() {
    return this.getChroniclesGQL
      .watch()
      .valueChanges.pipe(map((result) => result?.data?.chronicles));
  }
}
