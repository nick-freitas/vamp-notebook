import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-advantages',
  template: `
    <div class="row">
      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Disciplines ({{ character.disciplines | arrayCost }})</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [includeHr]="!isLast"
            [orientation]="this.horizontal"
            *ngFor="let discipline of character.disciplines; last as isLast"
            [name]="discipline.name"
            [points]="discipline.points"
            [prof]="discipline.prof"
          ></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Backgrounds ({{ character.backgrounds | arrayCost }})</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-backgrounds">
          <app-stat-block
            [includeHr]="!isLast"
            [orientation]="this.horizontal"
            *ngFor="let background of character.backgrounds; last as isLast"
            [name]="background.name"
            [points]="background.points"
            [prof]="background.prof"
          ></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Virtues ({{ character | points: ['conscience', 'selfControl', 'courage'] }})</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Conscience" [points]="character.conscience"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Self-Control" [points]="character.selfControl"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Courage" [points]="character.courage"></app-stat-block>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .ability-container {
        display: flex;
        flex-direction: column;
      }

      .ability-container .abilities-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvantagesComponent implements OnInit {
  @Input() character: Character;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {}

  ngOnInit(): void {}
}
