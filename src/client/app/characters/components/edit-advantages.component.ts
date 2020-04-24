import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { disciplines } from '../data/disciplines.data';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-advantages',
  template: `
    <div *ngIf="character$ | async as character">
      <div class="alert alert-warning" role="alert" *ngIf="this.errors$ | async as error">
        {{ error }}
      </div>

      <form [formGroup]="profileForm">
        <div>
          <h3>Disciplines</h3>
          <label>
            {{ this.profileForm.value.disciplineName1 }}

            <input type="number" formControlName="disciplinePoints1" />
          </label>

          <label>
            {{ this.profileForm.value.disciplineName2 }}
            <input type="number" formControlName="disciplinePoints2" />
          </label>

          <label>
            {{ this.profileForm.value.disciplineName3 }}
            <input type="number" formControlName="disciplinePoints3" />
          </label>
        </div>

        <div>
          <h3>Backgrounds</h3>
          <!-- <label>
          Charisma
          <input type="text" formControlName="charismaProf" />
          <input type="number" formControlName="charisma" />
        </label>

        <label>
          Manipulation
          <input type="text" formControlName="manipulationProf" />
          <input type="number" formControlName="manipulation" />
        </label>

        <label>
          Appearance
          <input type="text" formControlName="appearanceProf" />
          <input type="number" formControlName="appearance" />
        </label> -->
        </div>

        <div>
          <h3>Virtues</h3>
          <!-- <label>
          Perception
          <input type="text" formControlName="perceptionProf" />
          <input type="number" formControlName="perception" />
        </label>

        <label>
          Intelligence
          <input type="text" formControlName="intelligenceProf" />
          <input type="number" formControlName="intelligence" />
        </label>

        <label>
          Wits
          <input type="text" formControlName="witsProf" />
          <input type="number" formControlName="wits" />
        </label> -->
        </div>
      </form>

      <div class="btn-group" role="group">
        <button type="button" class="btn btn-outline-primary" (click)="previous()">Previous</button>

        <button type="button" class="btn btn-outline-primary" (click)="next()">Next</button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      :host > div {
        display: flex;
        flex-direction: column;
      }

      form {
        display: flex;
        flex-direction: row;
        column-gap: 8px;
      }

      form div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      form label {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class EditAdvantagesComponent implements OnInit {
  @Input() characterId: string;
  errors$: BehaviorSubject<string>;
  character$: Observable<Character>;
  disciplines = disciplines;
  profileForm = new FormGroup({
    disciplineName1: new FormControl(''),
    disciplineName2: new FormControl(''),
    disciplineName3: new FormControl(''),
    disciplinePoints1: new FormControl(''),
    disciplinePoints2: new FormControl(''),
    disciplinePoints3: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {
    this.errors$ = new BehaviorSubject<string>(null);
  }

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(
      tap(character => this.profileForm.patchValue(character)),
      tap(character => {
        const [disciplineName1, disciplineName2, disciplineName3] = this.disciplines[character.clan];
        this.profileForm.patchValue({ disciplineName1, disciplineName2, disciplineName3 });
        if (disciplineName1 !== character.disciplineName1 || disciplineName2 !== character.disciplineName2 || disciplineName3 !== character.disciplineName3) {
          this.errors$.next('Disciplines will change if you hit after this page to match clan disciplines');
        }
      })
    );
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'merits-flaws' }),
      error => console.error(error)
    );
  }

  previous() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'abilities' }),
      error => console.error(error)
    );
  }
}
