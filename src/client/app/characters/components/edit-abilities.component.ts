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
          alertness
          <input type="number" formControlName="alertness" />
        </label>
        <label>
          athletics
          <input type="number" formControlName="athletics" />
        </label>
        <label>
          awareness
          <input type="number" formControlName="awareness" />
        </label>
        <label>
          brawl
          <input type="number" formControlName="brawl" />
        </label>
        <label>
          empathy
          <input type="number" formControlName="empathy" />
        </label>
        <label>
          expression
          <input type="number" formControlName="expression" />
        </label>
        <label>
          intimidation
          <input type="number" formControlName="intimidation" />
        </label>
        <label>
          leadership
          <input type="number" formControlName="leadership" />
        </label>
        <label>
          streetwise
          <input type="number" formControlName="streetwise" />
        </label>
        <label>
          subterfuge
          <input type="number" formControlName="subterfuge" />
        </label>
      </div>

      <div id="skill-edits">
        <h3>Skills</h3>
        <label>
          animal ken
          <input type="number" formControlName="alertness" />
        </label>
        <label>
          crafts
          <input type="number" formControlName="athletics" />
        </label>
        <label>
          drive
          <input type="number" formControlName="drive" />
        </label>
        <label>
          etiquette
          <input type="number" formControlName="etiquette" />
        </label>
        <label>
          firearms
          <input type="number" formControlName="firearms" />
        </label>
        <label>
          larceny
          <input type="number" formControlName="larceny" />
        </label>
        <label>
          melee
          <input type="number" formControlName="melee" />
        </label>
        <label>
          performance
          <input type="number" formControlName="performance" />
        </label>
        <label>
          stealth
          <input type="number" formControlName="stealth" />
        </label>
        <label>
          survival
          <input type="number" formControlName="survival" />
        </label>
      </div>

      <div id="knowledge-edits">
        <h3>Knowledge</h3>
        <label>
          academics
          <input type="number" formControlName="academics" />
        </label>
        <label>
          computer
          <input type="number" formControlName="computer" />
        </label>
        <label>
          finance
          <input type="number" formControlName="finance" />
        </label>
        <label>
          investigation
          <input type="number" formControlName="investigation" />
        </label>
        <label>
          law
          <input type="number" formControlName="law" />
        </label>
        <label>
          medicine
          <input type="number" formControlName="medicine" />
        </label>
        <label>
          occult
          <input type="number" formControlName="occult" />
        </label>
        <label>
          politics
          <input type="number" formControlName="politics" />
        </label>
        <label>
          science
          <input type="number" formControlName="science" />
        </label>
        <label>
          technology
          <input type="number" formControlName="technology" />
        </label>
      </div>
    </form>
    <button type="button" class="btn btn-outline-primary" (click)="next()">Next</button>
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

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'advantages' }),
      error => console.error(error)
    );
  }
}
