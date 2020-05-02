import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs';
import { Character } from '../../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'character-list.page.html',
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
