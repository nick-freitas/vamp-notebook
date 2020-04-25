import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { disciplines } from '../data/disciplines.data';
import { backgrounds } from '../data/background.data';
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
          <label>
            <select class="form-control" formControlName="backgroundName1">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints1" />
          </label>

          <label>
            <select class="form-control" formControlName="backgroundName2">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints2" />
          </label>

          <label>
            <select class="form-control" formControlName="backgroundName3">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints3" />
          </label>

          <label>
            <select class="form-control" formControlName="backgroundName4">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints4" />
          </label>

          <label>
            <select class="form-control" formControlName="backgroundName5">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints5" />
          </label>

          <label>
            <select class="form-control" formControlName="backgroundName6">
              <option *ngFor="let background of backgrounds" [ngValue]="background">{{ background }}</option>
            </select>
            <input type="number" formControlName="backgroundPoints6" />
          </label>
        </div>

        <div>
          <h3>Virtues</h3>
          <label>
            Conscience
            <input type="number" formControlName="conscience" />
          </label>

          <label>
            Self-Control
            <input type="number" formControlName="selfControl" />
          </label>

          <label>
            Courage
            <input type="number" formControlName="courage" />
          </label>
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
  backgrounds = backgrounds;
  profileForm = new FormGroup({
    disciplineName1: new FormControl(''),
    disciplineName2: new FormControl(''),
    disciplineName3: new FormControl(''),
    disciplinePoints1: new FormControl(''),
    disciplinePoints2: new FormControl(''),
    disciplinePoints3: new FormControl(''),
    backgroundName1: new FormControl(''),
    backgroundName2: new FormControl(''),
    backgroundName3: new FormControl(''),
    backgroundName4: new FormControl(''),
    backgroundName5: new FormControl(''),
    backgroundName6: new FormControl(''),
    backgroundPoints1: new FormControl(''),
    backgroundPoints2: new FormControl(''),
    backgroundPoints3: new FormControl(''),
    backgroundPoints4: new FormControl(''),
    backgroundPoints5: new FormControl(''),
    backgroundPoints6: new FormControl(''),
    conscience: new FormControl(''),
    selfControl: new FormControl(''),
    courage: new FormControl('')
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

  validForm(): boolean {
    this.errors$.next(null);

    const { backgroundName1, backgroundName2, backgroundName3, backgroundName4, backgroundName5, backgroundName6 } = this.profileForm.value;
    const backgrounds = [backgroundName1, backgroundName2, backgroundName3, backgroundName4, backgroundName5, backgroundName6];
    const allUniqueBackgrounds = backgrounds.every((background, i, a) => a.indexOf(background) === i);

    if (!allUniqueBackgrounds) {
      this.errors$.next('Background Names must be unique');
      return false;
    }

    return true;
  }

  next() {
    if (!this.validForm()) return;

    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      _ => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'merits-flaws' }),
      error => console.error(error)
    );
  }

  previous() {
    if (!this.validForm()) return;

    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      _ => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'abilities' }),
      error => console.error(error)
    );
  }
}
