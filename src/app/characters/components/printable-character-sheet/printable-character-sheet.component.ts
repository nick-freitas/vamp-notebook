import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-printable-character-sheet",
  templateUrl: "./printable-character-sheet.component.html",
  styleUrls: ["./printable-character-sheet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintableCharacterSheetComponent {
  public dots = [
    { name: "strength", row: 0, column: 0 },
    { name: "dexterity", row: 1, column: 0 },
    { name: "stamina", row: 2, column: 0 },

    { name: "charisma", row: 0, column: 1 },
    { name: "manipulation", row: 1, column: 1 },
    { name: "appearance", row: 2, column: 1 },

    { name: "perception", row: 0, column: 2 },
    { name: "intelligence", row: 1, column: 2 },
    { name: "wits", row: 2, column: 2 },
  ];
  constructor() {}
}
