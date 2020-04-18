import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-stat-block',
  template: `
    <div *ngIf="this.orientation === this.vertical" class="vertical-stat-block">
      <label>{{ name }}</label>
      <span class="points" *ngIf="points != null">{{ points }}</span>
      <span class="prof" *ngIf="prof">{{ prof }}</span>
    </div>
    <div *ngIf="this.orientation === this.horizontal" class="horizontal-stat-block">
      <div>
        <label>{{ name }}</label>
        <span class="prof" *ngIf="prof">({{ prof }})</span>
        <span class="points" *ngIf="points != null">{{ points }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      div.horizontal-stat-block div {
        display: flex;
        justify-content: space-between;
      }

      div.vertical-stat-block {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
      }

      div.vertical-stat-block label {
        font-size: 0.8rem;
      }

      div.vertical-stat-block span.points {
        font-size: 1.2rem;
      }

      div.vertical-stat-block span.prof {
        font-size: 0.9rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBlockComponent implements OnInit {
  @Input() orientation: BlockOrientation;
  @Input() name: string;
  @Input() points: string;
  @Input() prof: string;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {}

  ngOnInit(): void {}
}
