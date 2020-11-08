import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-background-info',
  template: `
    <div class="card" id="background-info">
      <ul class="list-group list-group-horizontal-md list-group-flush d-flex justify-content-around">
        <li class="list-group-item"><span>Nature</span>: {{ character.nature }}</li>
        <li class="list-group-item"><span>Demeanor</span>: {{ character.demeanor }}</li>
        <li class="list-group-item"><span>Sire</span>: {{ character.sire }}</li>
        <li class="list-group-item"><span>Concept</span>: {{ character.concept }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .list-group-horizontal-md.list-group-flush .list-group-item {
        border: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundInfoComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit(): void {}
}
