import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-sheet-top-card',
  template: `
    <div class="card card-body" id="top-card">
      <div id="info-block">
        <img src="assets/mrniceguy.jpg" alt="Character Profile" />
        <div id="name-clan-container">
          <div id="name">{{ character.name }}</div>
          <div id="clan"><span i18n>Clan</span> {{ character.clan || 'Unknown' }} / <span i18n>Sect</span> {{ character.sect || 'Unknown' }}</div>
          <div id="generation">{{ character.generationDescription }} / {{ character.ageCategory }}</div>
        </div>
      </div>
      <div id="actions">
        <button type="button" class="btn btn-outline-success" (click)="export.emit(character.id)" i18n>
          Export
        </button>
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
  @Output() export: EventEmitter<string>;

  constructor() {
    this.delete = new EventEmitter();
    this.edit = new EventEmitter();
    this.export = new EventEmitter();
  }

  ngOnInit(): void {}
}
