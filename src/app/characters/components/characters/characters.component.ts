import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { StateService } from "../../../core/state/state.service";
import { NoteService } from "../../note.service";

@Component({
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  public characterListOpened: boolean;
  constructor(public state: StateService, public noteService: NoteService) {}
}
