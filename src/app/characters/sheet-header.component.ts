import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";

@Component({
  selector: "app-sheet-header",
  template: `
    <mat-card>
      <app-inline-input-editor
        text="Name"
        name="name"
        type="text"
        [value]="(this.state.selectedCharacter$ | async)?.name"
        (valueChanged)="this.state.changeCharacterStats($event)"
      ></app-inline-input-editor>
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetHeaderComponent implements OnInit {
  constructor(public state: StateService) {}

  ngOnInit() {}
}
