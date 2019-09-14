import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-character-portrait",
  templateUrl: "./character-portrait.component.html",
  styles: [
    `
      img {
        max-height: 300px;
      }

      mat-card-content {
        display: grid;
        place-content: center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterPortraitComponent {
  constructor(public state: StateService) {}
}
