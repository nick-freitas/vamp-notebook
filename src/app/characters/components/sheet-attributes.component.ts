import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { SheetAttributesField } from "src/app/core/state.types";

@Component({
  selector: "app-sheet-attributes",
  template: `
    <h2>Attributes</h2>
    <mat-card class="character-sheet-card">
      <div *ngFor="let attributesField of attributesFieldList">
        <h3>{{ attributesField.type }}</h3>
        <app-single-stat
          *ngFor="let attribute of attributesField.attributes"
          [stat]="attribute"
        >
        </app-single-stat>
      </div>
    </mat-card>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetAttributesComponent {
  @Input() attributesFieldList: SheetAttributesField[];
  constructor() {}
}
