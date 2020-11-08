import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-sheet-top-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ character.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Clan {{ character.clan || 'Unknown' }} / Sect {{ character.sect || 'Unknown' }} / {{ character.generationDescription || 'Generation Unknown' }} /
          {{ character.ageCategory }}
        </h6>
        <a class="card-link" (click)="this.export.emit(character.id)">Export</a>
        <a class="card-link" (click)="this.edit.emit(character.id)">Edit Character</a>
        <a class="card-link" (click)="this.delete.emit(character.id)">Delete Character</a>
      </div>
    </div>
  `,
  styleUrls: [],
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
