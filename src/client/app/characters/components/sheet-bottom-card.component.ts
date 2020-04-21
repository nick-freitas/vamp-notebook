import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';
import { BlockOrientation } from '../block-orientation.enum';
import { bearingModifier } from '../data/bearing.data';

@Component({
  selector: 'app-sheet-bottom-card',
  templateUrl: 'sheet-bottom-card.component.html',
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
