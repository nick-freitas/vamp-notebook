import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state/state.service";

@Component({
  selector: "app-character-portrait",
  templateUrl: "./character-portrait.component.html",
  styleUrls: ["./character-portrait.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterPortraitComponent {
  constructor(public state: StateService) {}
}
