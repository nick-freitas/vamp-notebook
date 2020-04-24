import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-attributes',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character">
      <div id="physicial-attributes">
        <h3>Physical</h3>
        <label>
          Strength
          <input type="text" formControlName="strengthProf" />
          <input type="number" formControlName="strength" />
        </label>

        <label>
          Dexterity
          <input type="text" formControlName="dexterityProf" />
          <input type="number" formControlName="dexterity" />
        </label>

        <label>
          Stamina
          <input type="text" formControlName="staminaProf" />
          <input type="number" formControlName="stamina" />
        </label>
      </div>

      <div id="mental-attributes">
        <h3>Mental</h3>
        <label>
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
        </label>
      </div>

      <div id="social-attributes">
        <h3>Social</h3>
        <label>
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
        </label>
      </div>
    </form>

    <div class="btn-group" role="group">
      <button type="button" class="btn btn-outline-primary" (click)="previous()">Previous</button>

      <button type="button" class="btn btn-outline-primary" (click)="next()">Next</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
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
export class EditAttributesComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  profileForm = new FormGroup({
    strength: new FormControl(''),
    dexterity: new FormControl(''),
    stamina: new FormControl(''),
    charisma: new FormControl(''),
    manipulation: new FormControl(''),
    appearance: new FormControl(''),
    perception: new FormControl(''),
    intelligence: new FormControl(''),
    wits: new FormControl(''),

    strengthProf: new FormControl(''),
    dexterityProf: new FormControl(''),
    staminaProf: new FormControl(''),
    charismaProf: new FormControl(''),
    manipulationProf: new FormControl(''),
    appearanceProf: new FormControl(''),
    perceptionProf: new FormControl(''),
    intelligenceProf: new FormControl(''),
    witsProf: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  previous() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'background' }),
      error => console.error(error)
    );
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'abilities' }),
      error => console.error(error)
    );
  }
}