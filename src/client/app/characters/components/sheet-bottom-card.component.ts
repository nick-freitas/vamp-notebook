import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-sheet-bottom-card',
  template: `
    <div class="row">
      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Merits ({{ character.merits | arrayCost: true }})</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [includeHr]="!isLast"
            [orientation]="this.horizontal"
            *ngFor="let merit of character.merits; last as isLast"
            [name]="merit.name"
            [points]="merit.cost"
          ></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Flaws ({{ character.flaws | arrayCost: true }})</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [includeHr]="!isLast"
            [orientation]="this.horizontal"
            *ngFor="let flaw of character.flaws; last as isLast"
            [name]="flaw.name"
            [points]="flaw.cost"
          ></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Humanity/Path</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [includeHr]="true" [orientation]="this.vertical" name="Humanity" [points]="character.humanity"></app-stat-block>
          <!-- todo: Add path -->
          <app-stat-block [orientation]="this.horizontal" name="Bearing" [prof]="character.bearing"></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Willpower</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [points]="character.willpower"></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Blood Pool</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [includeHr]="true" [orientation]="this.vertical" [points]="character.bloodPool"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Blood per Turn" [points]="character.bloodPerTurn"></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Health</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Bruised"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Hurt" prof="-1"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Injured" prof="-1"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Wounded" prof="-2"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Mauled" prof="-2"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Cripled" prof="-5"></app-stat-block>
          <app-stat-block [includeHr]="true" [orientation]="this.horizontal" name="Incapacitated"></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Notes</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [orientation]="this.horizontal"
            *ngFor="let discipline of character.comboDisciplines"
            name="Combo Discipline"
            [prof]="discipline"
          ></app-stat-block>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./sheet-bottom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetBottomCardComponent implements OnInit {
  @Input() character: Character;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {}

  ngOnInit(): void {}
}
