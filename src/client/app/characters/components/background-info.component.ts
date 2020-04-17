import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-background-info',
  template: `
    <div class="card" id="background-info">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span>Nature</span>: {{ character.nature }}
          <img src="/assets/info-circle.svg" data-toggle="tooltip" [title]="character.natureDescription" />
        </li>
        <li class="list-group-item">
          <span>Demeanor</span>: {{ character.demeanor }}
          <img src="/assets/info-circle.svg" data-toggle="tooltip" [title]="character.demeanorDescription" />
        </li>
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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundInfoComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit(): void {}
}
