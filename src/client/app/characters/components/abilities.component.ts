import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { AbilityBlock } from '../abilities.data';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-abilities',
  template: `
    <div class="row">
      <div class="col-lg ability-container" *ngFor="let block of blocks">
        <div class="ability-name-points">
          <span i18n>{{ block.name }} Abilities</span> ({{ character | points: block.forPoints:block.defaultOne }})
        </div>
        <div class="card card-body abilities-card">
          <app-stat-block
            [orientation]="this.horizontal"
            *ngFor="let type of block.types; last as isLast"
            [name]="type.name"
            [points]="character[type.points]"
            [prof]="character[type.prof]"
          ></app-stat-block>
        </div>
        <hr />
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
export class AbilitiesComponent implements OnInit {
  @Input() character: Character;
  blocks: any[];
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {
    this.blocks = AbilityBlock;
  }

  ngOnInit(): void {}
}
