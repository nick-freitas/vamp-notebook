import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { StateService } from "../../core/state.service";
import { SheetHeaderFields } from "src/app/core/state.types";

@Component({
  selector: "app-sheet-header",
  template: `
    <mat-card class="character-sheet-card">
      <app-inline-input-editor
        *ngFor="let headerField of headerFieldList"
        [text]="headerField.text"
        [name]="headerField.name"
        [type]="headerField.inputType || 'text'"
        [selectionOptionList]="headerField.selectionOptionList"
        [editWarning]="headerField.editWarning"
        [value]="(state.selectedCharacter$ | async)[headerField.name]"
        (valueChanged)="state.changeCharacterStats($event)"
      ></app-inline-input-editor>
    </mat-card>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetHeaderComponent {
  @Input() headerFieldList: SheetHeaderFields[];
  constructor(public state: StateService) {}
}
