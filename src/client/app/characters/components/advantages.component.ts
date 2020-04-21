import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';

@Component({
  selector: 'app-advantages',
  templateUrl: 'advantages.component.html',
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
export class AdvantagesComponent implements OnInit {
  @Input() character: Character;
  vertical: BlockOrientation = BlockOrientation.VERTICAL;
  horizontal: BlockOrientation = BlockOrientation.HORIZONTAL;

  constructor() {}

  ngOnInit(): void {}
}
