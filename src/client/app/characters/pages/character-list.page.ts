import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="row">
      <nav aria-label="breadcrumb" class="col-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Characters</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center">
        My Characters
        <button type="button" class="btn btn-primary" (click)="createCharacter()">Create New Character</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-lg-3 top-buffer" *ngFor="let character of characters$ | async">
        <div class="card" routerLink="/characters/{{ character.id }}">
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Clan {{ character.clan || 'Unknown' }} / Sect {{ character.sect || 'Unknown' }} / {{ character.generationDescription || 'Generation Unknown' }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class CharacterListPage implements OnInit {
  loading$: Observable<boolean>;
  characters$: Observable<Character[]>;

  constructor(private characterSvc: CharactersService, private router: Router) {
    this.characters$ = characterSvc.entities$;
    this.loading$ = characterSvc.loading$;
  }

  ngOnInit() {
    this.getCharacters();
  }

  add(character: Character) {
    this.characterSvc.add(character);
  }

  delete(character: Character) {
    console.log('not actually going to do this right now');
    // this.characterSvc.delete(character.id);
  }

  getCharacters() {
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
