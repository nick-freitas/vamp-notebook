import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';
import { bearingModifier } from '../data/bearing.data';
import { MeritsBlock } from '../block-data/merits.block-data';
import { FlawsBlock } from '../block-data/flaws.block-data';
import { HumanityBlock } from '../block-data/humanity.block-data';
import { WillpowerBlock } from '../block-data/willpower.block-data';
import { BloodpoolBlock } from '../block-data/bloodpool.block-data';
import { HealthBlock } from '../block-data/health.block-data';
import { WeaknessBlock } from '../block-data/weakness.block-data';
import { ExperienceBlock } from '../block-data/experience.block-data';

@Component({
  selector: 'app-sheet-bottom-card',
  template: `
    <div class="row">
      <!-- merits; flaws -->
      <div class="col-lg">
        <div class="card" *ngFor="let block of [this.meritsBlock, this.flawsBlock]">
          <div class="card-header d-flex justify-content-between">
            <span>{{ block.name }}</span>
            <span *ngIf="block.forPoints"> {{ character | points: block.forPoints:block.defaultOne }} pts</span>
          </div>
          <div class="card-body">
            <ul class="list-group-flush stat-group">
              <li class="stat-list-item list-group-item d-flex flex-fill" *ngFor="let type of block.types">
                <app-stat-block
                  [name]="type.typeNameIsCharactered ? character[type.name] : type.name"
                  [points]="type.typePointsAreLabels ? 'type.points' : character[type.points]"
                  [prof]="type.typeProfsAreLabels ? type.prof : character[type.prof]"
                ></app-stat-block>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- humanity/path; willpower; blood pool -->
      <div class="col-lg">
        <div class="card" *ngFor="let block of [this.humanityBlock, this.willpowerBlock, this.bloodPoolBlock]">
          <div class="card-header d-flex justify-content-between">
            <span>{{ block.name }}</span>
            <span *ngIf="block.forPoints"> {{ character | points: block.forPoints:block.defaultOne }} pts</span>
          </div>
          <div class="card-body">
            <ul class="list-group-flush stat-group">
              <li class="stat-list-item list-group-item d-flex flex-fill" *ngFor="let type of block.types">
                <app-stat-block
                  [name]="type.typeNameIsCharactered ? character[type.name] : type.name"
                  [points]="type.typePointsAreLabels ? 'type.points' : character[type.points]"
                  [prof]="type.typeProfsAreLabels ? type.prof : character[type.prof]"
                ></app-stat-block>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- heath; weakness; experience -->
      <div class="col-lg">
        <div class="card" *ngFor="let block of [this.healthBlock, this.weaknessBlock, this.experienceBlock]">
          <div class="card-header d-flex justify-content-between">
            <span>{{ block.name }}</span>
            <span *ngIf="block.forPoints"> {{ character | points: block.forPoints:block.defaultOne }} pts</span>
          </div>
          <div class="card-body">
            <ul class="list-group-flush stat-group">
              <li class="stat-list-item list-group-item d-flex flex-fill" *ngFor="let type of block.types">
                <app-stat-block
                  [name]="type.typeNameIsCharactered ? character[type.name] : type.name"
                  [points]="type.typePointsAreLabels ? type.points : character[type.points]"
                  [prof]="type.typeProfsAreLabels ? type.prof : character[type.prof]"
                ></app-stat-block>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetBottomCardComponent implements OnInit {
  @Input() character: Character;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;
  bearingModifier = bearingModifier;
  meritsBlock: any;
  flawsBlock: any;
  humanityBlock: any;
  willpowerBlock: any;
  bloodPoolBlock: any;
  healthBlock: any;
  weaknessBlock: any;
  experienceBlock: any;

  constructor() {
    this.meritsBlock = MeritsBlock;
    this.flawsBlock = FlawsBlock;
    this.humanityBlock = HumanityBlock;
    this.willpowerBlock = WillpowerBlock;
    this.bloodPoolBlock = BloodpoolBlock;
    this.healthBlock = HealthBlock;
    this.weaknessBlock = WeaknessBlock;
    this.experienceBlock = ExperienceBlock;
  }

  ngOnInit(): void {}
}
