import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-advantages',
  template: `
    <div class="row">
      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Disciplines</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.disciplineName1"
            [points]="character.disciplinePoints1"
            [prof]="character.disciplineProf1"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.disciplineName2"
            [points]="character.disciplinePoints2"
            [prof]="character.disciplineProf2"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.disciplineName3"
            [points]="character.disciplinePoints3"
            [prof]="character.disciplineProf3"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.disciplineName4"
            [points]="character.disciplinePoints4"
            [prof]="character.disciplineProf4"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.disciplineName5"
            [points]="character.disciplinePoints5"
            [prof]="character.disciplineProf5"
          ></app-stat-block>
          <app-stat-block
            *ngIf="character.disciplineName6"
            [orientation]="this.horizontal"
            [name]="character.disciplineName6"
            [points]="character.disciplinePoints6"
            [prof]="character.disciplineProf6"
          ></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Backgrounds</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-backgrounds">
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.backgroundName1"
            [points]="character.backgroundPoints1"
            [prof]="character.backgroundProf1"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.backgroundName2"
            [points]="character.backgroundPoints2"
            [prof]="character.backgroundProf2"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.backgroundName3"
            [points]="character.backgroundPoints3"
            [prof]="character.backgroundProf3"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.backgroundName4"
            [points]="character.backgroundPoints4"
            [prof]="character.backgroundProf4"
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            [name]="character.backgroundName5"
            [points]="character.backgroundPoints5"
            [prof]="character.backgroundProf5"
          ></app-stat-block>
          <app-stat-block
            *ngIf="character.backgroundName6"
            [orientation]="this.horizontal"
            [name]="character.backgroundName6"
            [points]="character.backgroundPoints6"
            [prof]="character.backgroundProf6"
          ></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Virtues</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-virtues">
          <app-stat-block [orientation]="this.horizontal" name="Conscience" [points]="character.conscience"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Self-Control" [points]="character.selfControl"></app-stat-block>
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
