import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { StatField } from "src/app/core/state.types";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-single-stat",
  template: `
    {{ stat.text }}

    <div class="dot-group">
      <button
        mat-icon-button
        *ngFor="let dot of [].constructor(stat.maxDots || 5); let i = index"
        (click)="state.changeStatDots(stat.name, i + 1)"
      >
        <ng-container
          *ngIf="
            (state.selectedCharacter$ | async).stats[stat.name]?.value > i;
            then filled;
            else blank
          "
        ></ng-container>
        <ng-template #filled>
          <mat-icon>star</mat-icon>
        </ng-template>
        <ng-template #blank>
          <mat-icon>star_border</mat-icon>
        </ng-template>
      </button>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        padding-bottom: 24px;
      }

      .dot-group {
        display: flex;
        flex-direction: row;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleStatComponent {
  @Input() stat: StatField;
  public dots: number[];

  constructor(public state: StateService) {}
}
