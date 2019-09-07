import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { SheetAbilitiesField } from "src/app/core/state.types";

@Component({
  selector: "app-sheet-abilities",
  template: `
    <h2>Abilities</h2>
    <mat-card class="character-sheet-card">
      <div *ngFor="let abilitiesField of abilitiesFieldList">
        <h3>{{ abilitiesField.type }}</h3>
        <app-single-stat
          *ngFor="let ability of abilitiesField.abilities"
          [stat]="ability"
        >
        </app-single-stat>
      </div>
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetAbilitiesComponent implements OnInit {
  @Input() abilitiesFieldList: SheetAbilitiesField[];

  constructor() {}

  ngOnInit() {}
}
