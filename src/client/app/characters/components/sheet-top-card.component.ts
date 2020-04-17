import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-sheet-top-card',
  template: `
    <div class="card card-body" id="top-card">
      <div id="info-block">
        <img src="assets/mrniceguy.jpg" alt="Character Profile" />
        <div id="name-clan-container">
          <span id="name">{{ character.name }}</span>
          <span id="clan"> <span i18n>Clan</span> {{ character.clan || 'Unknown' }} / <span i18n>Sect</span> {{ character.sect || 'Unknown' }} </span>
          <span id="clan">{{ character.generationDescription }}</span>
        </div>
      </div>
      <div id="actions">
        <button type="button" class="btn btn-outline-light" (click)="edit.emit(character.id)" i18n>
          Edit
        </button>
        <button type="button" class="btn btn-outline-danger" (click)="delete.emit(character.id)" i18n>
          Delete
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./sheet-top-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetTopCardComponent implements OnInit {
  @Input() character: Character;
  @Output() delete: EventEmitter<string>;
  @Output() edit: EventEmitter<string>;

  constructor() {
    this.delete = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {}
}
