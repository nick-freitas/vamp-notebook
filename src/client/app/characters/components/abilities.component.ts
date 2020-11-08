import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-abilities',
  template: `
    <div class="row">
      <div class="col-lg attribute-container" *ngFor="let block of dataBlocks">
        <div class="card ">
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
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbilitiesComponent implements OnInit {
  @Input() character: Character;
  @Input() dataBlocks: any;

  ngOnInit(): void {}
}
