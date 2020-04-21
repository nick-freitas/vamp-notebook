import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page" i18n>
          Characters
        </li>
      </ol>
    </nav>

    <div *ngIf="loading$ | async; then loading; else loaded"></div>
    <!-- loading -->
    <ng-template #loading> <app-spinner></app-spinner> </ng-template>

    <!-- loaded -->
    <ng-template #loaded>
      <ul class="list-group">
        <li class="list-group-item" (click)="createCharacter()">Create New Character</li>
        <li class="list-group-item" routerLink="/characters/{{ character.id }}" *ngFor="let character of characters$ | async">
          {{ character.clan }} > {{ character.name }}
        </li>
      </ul>
    </ng-template>
  `,
  styles: []
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
    this.characterSvc.delete(character.id);
  }

  getHeroes() {
    this.characterSvc.getAll();
  }

  update(character: Character) {
    this.characterSvc.update(character);
  }

  createCharacter() {
    this.characterSvc.add(new Character()).subscribe(
      response => this.router.navigate(['/characters', response.id, 'edit'], { fragment: 'background' }),
      error => console.error(error)
    );
  }
}
