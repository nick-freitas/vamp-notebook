import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { StatField } from "src/app/core/state.types";

@Component({
  selector: "app-single-stat",
  template: `
    {{ stat.name }}

    <mat-radio-group class="stat-dots">
      <mat-radio-button></mat-radio-button>
      <mat-radio-button></mat-radio-button>
      <mat-radio-button></mat-radio-button>
      <mat-radio-button></mat-radio-button>
      <mat-radio-button></mat-radio-button>
      <mat-radio-button></mat-radio-button>
    </mat-radio-group>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        padding-bottom: 24px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleStatComponent {
  @Input() stat: StatField;

  constructor() {}
}
