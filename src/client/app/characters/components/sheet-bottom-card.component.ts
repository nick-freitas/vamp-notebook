import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';
import { bearingModifier } from '../data/bearing.data';

@Component({
  selector: 'app-sheet-bottom-card',
  template: `
    <div class="row">
      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Merits</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.horizontal" [name]="character.meritName1" [points]="character.meritPoints1"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.meritName2" [points]="character.meritPoints2"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.meritName3" [points]="character.meritPoints3"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.meritName4" [points]="character.meritPoints4"></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Flaws</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.horizontal" [name]="character.flawName1" [points]="character.flawPoints1"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.flawName2" [points]="character.flawPoints2"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.flawName3" [points]="character.flawPoints3"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" [name]="character.flawName4" [points]="character.flawPoints4"></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Humanity/Path</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [name]="character.path" [points]="character.humanity"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Bearing" [prof]="character.bearing" [points]="character.bearingModifier"></app-stat-block>
        </div>

        <div class="advantage-name-points">
          <span>Willpower</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [points]="character.willpower"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Max Willpower" [points]="character.maxWillpower"></app-stat-block>
        </div>

        <div class="advantage-name-points">
          <span>Blood Pool</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [points]="character.bloodPool"></app-stat-block>
          <app-stat-block [orientation]="this.horizontal" name="Blood per Turn" [points]="character.bloodPerTurn"></app-stat-block>
        </div>
      </div>

      <div class="col-lg advantage-container">
        <div class="advantage-name-points">
          <span>Health</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block
            [orientation]="this.horizontal"
            name="Bruised"
            nameTooltip="Character is only bruised and suffers no dice pool penalties due to damage."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Hurt"
            prof="-1"
            nameTooltip="Character is superficially hurt and suffers no movement hindrance."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Injured"
            prof="-1"
            nameTooltip="Character suffers minor injuries and movement is mildly inhibited (halve maximum running speed)."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Wounded"
            prof="-2"
            nameTooltip="Character suffers significant damage and may not run (though he may still walk). At this level, a character may only move or attack; he always loses dice when moving and attacking in the same turn."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Mauled"
            prof="-2"
            nameTooltip="Character is badly injured and may only hobble about (three yards or meters/turn)."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Cripled"
            prof="-5"
            nameTooltip="Character is catastrophically injured and may only crawl (one yard or meter/turn)."
          ></app-stat-block>
          <app-stat-block
            [orientation]="this.horizontal"
            name="Incapacitated"
            nameTooltip="Character is incapable of movement and is likely unconscious. Incapacitated vampires with no blood in their bodies enter torpor."
          ></app-stat-block>
          <app-stat-block
            *ngIf="false"
            [orientation]="this.horizontal"
            name="Torpor"
            nameTooltip="Character enters a deathlike trance. He may do nothing, not even spend blood, until a certain period of time has passed."
          ></app-stat-block>
          <app-stat-block
            *ngIf="false"
            [orientation]="this.horizontal"
            name="Final Death"
            nameTooltip="Character dies again, this time forever."
          ></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Weakness</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [points]="character.weakness"></app-stat-block>
        </div>
        <div class="advantage-name-points">
          <span>Experience</span>
        </div>
        <div class="card card-body advantages-card" id="advantages-disciplines">
          <app-stat-block [orientation]="this.vertical" [points]="character.experience"></app-stat-block>
        </div>
      </div>
    </div>
    <div>
      <div class="advantage-name-points">
        <span>Notes</span>
      </div>
      <div class="card card-body advantages-card" id="advantages-disciplines">
        <app-stat-block [orientation]="this.horizontal" name="Combo Discipline" [prof]="character.comboDisciplineName1"></app-stat-block>
        <app-stat-block [orientation]="this.horizontal" [name]="character.otherNotes" *ngIf="character.otherNotes"></app-stat-block>
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
  bearingModifier = bearingModifier;
  constructor() {}

  ngOnInit(): void {}
}
