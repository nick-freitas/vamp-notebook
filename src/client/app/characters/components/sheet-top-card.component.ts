import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Component({
  selector: 'app-sheet-top-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{character.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Clan {{ character.clan || 'Unknown' }} / Sect {{ character.sect || 'Unknown' }} / {{ character.generationDescription || 'Generation Unknown' }} /
          {{ character.ageCategory }}
        </h6>
        <a href="#" class="card-link">Edit Character</a>
        <a href="#" class="card-link">Delete Character</a>
      </div>
    </div>

    <!-- <mat-card class="example-card">
      <mat-card-header>
        <img src="assets/mrniceguy.jpg" mat-card-avatar class="example-header-image" />
        <mat-card-title></mat-card-title>
        <mat-card-subtitle>
          
        </mat-card-subtitle>
      </mat-card-header> -->
      <!-- <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu" /> -->
      <!-- <mat-card-content></mat-card-content> -->
      <!-- <mat-card-actions>
        <button mat-button (click)="export.emit(character.id)">Export</button>
        <button mat-button (click)="edit.emit(character.id)">Edit</button>
        <button mat-button color="warn" (click)="delete.emit(character.id)">Delete</button>
      </mat-card-actions> -->
    <!-- </mat-card> -->

    <!-- <div class="card card-body" id="top-card">
      <div id="info-block">
        <img alt="Character Profile" />
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
    </div> -->
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
