import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state/state.service";

@Component({
  selector: "app-sidenav-character-list",
  templateUrl: "./sidenav-character-list.component.html",
  styleUrls: ["./sidenav-character-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavCharacterListComponent {
  constructor(public state: StateService) {}
}
