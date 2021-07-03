import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.components.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSheetComponent {
  constructor(public state: StateService) {}
}
