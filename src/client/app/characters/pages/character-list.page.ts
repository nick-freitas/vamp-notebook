import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  template: `
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page" i18n>
          Characters
        </li>
      </ol>
    </nav> -->

    <!-- <div *ngIf="loading$ | async; then loading; else loaded"></div>
    <!-- loading -->
    <!-- <ng-template #loading> <app-spinner></app-spinner> </ng-template> -->

    <!-- loaded -->
    <!-- <ng-template #loaded>
      
    </ng-template> -->
    <!-- <div *ngFor="let clan of characters$ | async | byClan" class="clans">
      <h1>{{ clan.clan }}</h1> -->

    <div class="grid">
      <div class="card" *ngFor="let character of characters$ | async">
        <div class="card-top">
          <div class="card-header">{{ character.name }}</div>
          <div class="card-subheader">Clan {{ character.clan || 'Unknown' }} / Sect {{ character.sect || 'Unknown' }}</div>
        </div>
        <ul class="card-actions">
          <li><a routerLink="/characters/{{ character.id }}">View</a></li>
          <li><a routerLink="/characters/{{ character.id }}/edit">Edit</a></li>
          <li><a (click)="delete(character)">Delete</a></li>
        </ul>
      </div>
    </div>
    <!-- </div> -->

    <div class="fab">
      <span class="tooltip" (click)="createCharacter()">
        Create New Character
      </span>
      <span class="fab-icon material-icons" data-tooltip="Create New Character" (click)="createCharacter()">
        add
      </span>
    </div>
  `,
  styleUrls: ['character-list.page.scss']
})
export class CharacterListPage implements OnInit {
  loading$: Observable<boolean>;
  characters$: Observable<Character[]>;

  constructor(private characterSvc: CharactersService, private router: Router) {
    this.characters$ = characterSvc.entities$;
    this.loading$ = characterSvc.loading$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(character: Character) {
    this.characterSvc.add(character);
  }

  delete(character: Character) {
    console.log('not actually going to do this right now');
    // this.characterSvc.delete(character.id);
  }

  getHeroes() {
    this.characterSvc.getAll();
  }

  update(character: Character) {
    this.characterSvc.update(character);
  }

  createCharacter() {
    return;
    // this.characterSvc.add(new Character()).subscribe(
    //   response => this.router.navigate(['/characters', response.id, 'edit'], { fragment: 'background' }),
    //   error => console.error(error)
    // );
  }
}
