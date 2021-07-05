import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state/state.service";

@Component({
  selector: "app-sidenav-note-list",
  templateUrl: "./sidenav-note-list.component.html",
  styleUrls: ["./sidenav-note-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavNoteListComponent {
  constructor(public state: StateService) {}
}
