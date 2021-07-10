import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-sheet-abilities",
  templateUrl: "./sheet-abilities.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetAbilitiesComponent {
  @Input() abilitiesFieldList: any[]; //SheetAbilitiesField[];

  constructor() {}
}
