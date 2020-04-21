import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-advantages',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>

      <label>
        Clan
        <input type="text" formControlName="clan" />
      </label>

      <label>
        Sect
        <input type="text" formControlName="sect" />
      </label>

      <label>
        Nature
        <input type="text" formControlName="nature" />
      </label>

      <label>
        Demeanor
        <input type="text" formControlName="demeanor" />
      </label>

      <label>
        Sire
        <input type="text" formControlName="sire" />
      </label>

      <label>
        Concept
        <input type="text" formControlName="concept" />
      </label>

      <button type="button" class="btn btn-outline-primary" (click)="next()">Next</button>
    </form>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class EditAdvantagesComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;

  profileForm = new FormGroup({
    strength: new FormControl(''),
    dexterity: new FormControl(''),
    manipulation: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'merits-flaws' }),
      error => console.error(error)
    );
  }
}
