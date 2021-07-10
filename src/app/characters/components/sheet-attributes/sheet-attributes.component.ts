import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-sheet-attributes",
  templateUrl: "./sheet-atributes.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetAttributesComponent {
  @Input() attributesFieldList: any[]; //SheetAttributesField[];
  constructor() {}
}
