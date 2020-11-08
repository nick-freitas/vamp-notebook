import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-stat-block',
  template: `
    <div class="d-flex justify-content-between flex-fill">
      <span class="name">{{ name }}</span>
      <span class="prof">{{ prof || '' }}</span>
      <span class="points">{{ points }}</span>
    </div>
  `,
  styles: [
    `
      .name {
        font-size: 0.9rem;
      }

      .points {
        font-size: 2rem;
      }

      .prof {
        font-size: 0.7rem;
        font-style: italic;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBlockComponent implements OnInit {
  @Input() name: string;
  @Input() points: string;
  @Input() prof: string;

  constructor() {}

  ngOnInit(): void {}
}
