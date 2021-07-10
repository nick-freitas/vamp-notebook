import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedViewService {
  readonly selectedViewIsNoteView$: Subject<boolean>;

  constructor() {
    this.selectedViewIsNoteView$ = new BehaviorSubject(null);
  }

  leaveNoteView(): void {
    this.selectedViewIsNoteView$.next(false);
  }

  enterNoteView(): void {
    this.selectedViewIsNoteView$.next(true);
  }
}
