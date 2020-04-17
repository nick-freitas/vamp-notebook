import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { AttributeBlock } from '../attribute.data';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-attributes',
  template: `
    <div class="row">
      <div class="col-lg attribute-container" *ngFor="let block of blocks">
        <div class="attribute-name-points">
          <span>{{ block.name }} Attributes</span> ({{ character | points: block.forPoints:block.defaultOne }})
        </div>
        <div class="card card-body attributes-card" id="attributes-physical">
          <app-stat-block
            [orientation]="this.vertical"
            *ngFor="let type of block.types"
            [name]="type.name"
            [points]="character[type.points]"
            [prof]="character[type.prof]"
          ></app-stat-block>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .attribute-container {
        display: flex;
        flex-direction: column;
      }

      .attribute-container .attributes-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributesComponent implements OnInit {
  @Input() character: Character;
  blocks: any;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {
    this.blocks = AttributeBlock;
  }

  ngOnInit(): void {}
}
