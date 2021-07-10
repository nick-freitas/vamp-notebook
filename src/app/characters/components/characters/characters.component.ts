import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { MobileService } from "../../../core/mobile.service";
import { NoteService } from "../../note.service";
import { SelectedViewService } from "../../selected-view.service";

@Component({
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  public characterListOpened: boolean;
  constructor(
    public mobileService: MobileService,
    public noteService: NoteService,
    public selectedViewService: SelectedViewService
  ) {}
}
