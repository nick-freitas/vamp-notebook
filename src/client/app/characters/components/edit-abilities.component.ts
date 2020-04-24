import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-abilities',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character">
      <div id="talent-edits">
        <h3>Talents</h3>
        <label>
          Alertness
          <input type="text" formControlName="alertnessProf" />
          <input type="number" formControlName="alertness" />
        </label>
        <label>
          Athletics
          <input type="text" formControlName="athleticsProf" />
          <input type="number" formControlName="athletics" />
        </label>
        <label>
          Awareness
          <input type="text" formControlName="awarenessProf" />
          <input type="number" formControlName="awareness" />
        </label>
        <label>
          Brawl
          <input type="text" formControlName="brawlProf" />
          <input type="number" formControlName="brawl" />
        </label>
        <label>
          Empathy
          <input type="text" formControlName="empathyProf" />
          <input type="number" formControlName="empathy" />
        </label>
        <label>
          Expression
          <input type="text" formControlName="expressionProf" />
          <input type="number" formControlName="expression" />
        </label>
        <label>
          Intimidation
          <input type="text" formControlName="intimidationProf" />
          <input type="number" formControlName="intimidation" />
        </label>
        <label>
          Leadership
          <input type="text" formControlName="leadershipProf" />
          <input type="number" formControlName="leadership" />
        </label>
        <label>
          Streetwise
          <input type="text" formControlName="streetwiseProf" />
          <input type="number" formControlName="streetwise" />
        </label>
        <label>
          Subterfuge
          <input type="text" formControlName="subterfugeProf" />
          <input type="number" formControlName="subterfuge" />
        </label>
      </div>

      <div id="skill-edits">
        <h3>Skills</h3>
        <label>
          Animal Ken
          <input type="text" formControlName="animalKenProf" />
          <input type="number" formControlName="animalKen" />
        </label>
        <label>
          Crafts
          <input type="text" formControlName="athleticsProf" />
          <input type="number" formControlName="athletics" />
        </label>
        <label>
          Drive
          <input type="text" formControlName="driveProf" />
          <input type="number" formControlName="drive" />
        </label>
        <label>
          Etiquette
          <input type="text" formControlName="etiquetteProf" />
          <input type="number" formControlName="etiquette" />
        </label>
        <label>
          Firearms
          <input type="text" formControlName="firearmsProf" />
          <input type="number" formControlName="firearms" />
        </label>
        <label>
          Larceny
          <input type="text" formControlName="larcenyProf" />
          <input type="number" formControlName="larceny" />
        </label>
        <label>
          Melee
          <input type="text" formControlName="meleeProf" />
          <input type="number" formControlName="melee" />
        </label>
        <label>
          Performance
          <input type="text" formControlName="performanceProf" />
          <input type="number" formControlName="performance" />
        </label>
        <label>
          Stealth
          <input type="text" formControlName="stealthProf" />
          <input type="number" formControlName="stealth" />
        </label>
        <label>
          Survival
          <input type="text" formControlName="survivalProf" />
          <input type="number" formControlName="survival" />
        </label>
      </div>

      <div id="knowledge-edits">
        <h3>Knowledge</h3>
        <label>
          Academics
          <input type="text" formControlName="academicsProf" />
          <input type="number" formControlName="academics" />
        </label>
        <label>
          Computer
          <input type="text" formControlName="computerProf" />
          <input type="number" formControlName="computer" />
        </label>
        <label>
          Finance
          <input type="text" formControlName="financeProf" />
          <input type="number" formControlName="finance" />
        </label>
        <label>
          Investigation
          <input type="text" formControlName="investigationProf" />
          <input type="number" formControlName="investigation" />
        </label>
        <label>
          Law
          <input type="text" formControlName="lawProf" />
          <input type="number" formControlName="law" />
        </label>
        <label>
          Medicine
          <input type="text" formControlName="medicineProf" />
          <input type="number" formControlName="medicine" />
        </label>
        <label>
          Occult
          <input type="text" formControlName="occultProf" />
          <input type="number" formControlName="occult" />
        </label>
        <label>
          Politics
          <input type="text" formControlName="politicsProf" />
          <input type="number" formControlName="politics" />
        </label>
        <label>
          Science
          <input type="text" formControlName="scienceProf" />
          <input type="number" formControlName="science" />
        </label>
        <label>
          Technology
          <input type="text" formControlName="technologyProf" />
          <input type="number" formControlName="technology" />
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
export class EditAbilitiesComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  profileForm = new FormGroup({
    alertness: new FormControl(''),
    athletics: new FormControl(''),
    awareness: new FormControl(''),
    brawl: new FormControl(''),
    empathy: new FormControl(''),
    expression: new FormControl(''),
    intimidation: new FormControl(''),
    leadership: new FormControl(''),
    streetwise: new FormControl(''),
    subterfuge: new FormControl(''),
    animalKen: new FormControl(''),
    crafts: new FormControl(''),
    drive: new FormControl(''),
    etiquette: new FormControl(''),
    firearms: new FormControl(''),
    larceny: new FormControl(''),
    melee: new FormControl(''),
    performance: new FormControl(''),
    stealth: new FormControl(''),
    survival: new FormControl(''),
    academics: new FormControl(''),
    computer: new FormControl(''),
    finance: new FormControl(''),
    investigation: new FormControl(''),
    law: new FormControl(''),
    medicine: new FormControl(''),
    occult: new FormControl(''),
    politics: new FormControl(''),
    science: new FormControl(''),
    technology: new FormControl(''),

    alertnessProf: new FormControl(''),
    athleticsProf: new FormControl(''),
    awarenessProf: new FormControl(''),
    brawlProf: new FormControl(''),
    empathyProf: new FormControl(''),
    expressionProf: new FormControl(''),
    intimidationProf: new FormControl(''),
    leadershipProf: new FormControl(''),
    streetwiseProf: new FormControl(''),
    subterfugeProf: new FormControl(''),
    animalKenProf: new FormControl(''),
    driveProf: new FormControl(''),
    etiquetteProf: new FormControl(''),
    firearmsProf: new FormControl(''),
    larcenyProf: new FormControl(''),
    meleeProf: new FormControl(''),
    performanceProf: new FormControl(''),
    stealthProf: new FormControl(''),
    survivalProf: new FormControl(''),
    academicsProf: new FormControl(''),
    computerProf: new FormControl(''),
    financeProf: new FormControl(''),
    investigationProf: new FormControl(''),
    lawProf: new FormControl(''),
    medicineProf: new FormControl(''),
    occultProf: new FormControl(''),
    politicsProf: new FormControl(''),
    scienceProf: new FormControl(''),
    technologyProf: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  previous() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'attributes' }),
      error => console.error(error)
    );
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'advantages' }),
      error => console.error(error)
    );
  }
}
