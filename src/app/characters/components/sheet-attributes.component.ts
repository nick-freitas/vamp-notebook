import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { SheetAttributesField } from "src/app/core/state.types";

@Component({
  selector: "app-sheet-attributes",
  templateUrl: "./sheet-atributes.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetAttributesComponent {
  @Input() attributesFieldList: SheetAttributesField[];
  constructor() {}
}
