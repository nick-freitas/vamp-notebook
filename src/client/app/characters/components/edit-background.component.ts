import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { clans } from '../data/clans.data';
import { sects } from '../data/sects.data';
import { archetypes } from '../data/archetypes.data';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-background',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>

      <label>
        Clan
        <select class="form-control" formControlName="clan">
          <option *ngFor="let clan of clans" [ngValue]="clan">{{ clan }}</option>
        </select>
      </label>

      <label>
        Sect
        <select class="form-control" formControlName="sect">
          <option *ngFor="let sect of sects" [ngValue]="sect">{{ sect }}</option>
        </select>
      </label>

      <label>
        Nature
        <select class="form-control" formControlName="nature">
          <option *ngFor="let archetype of archetypes" [ngValue]="archetype">{{ archetype }}</option>
        </select>
      </label>

      <label>
        Demeanor
        <select class="form-control" formControlName="demeanor">
          <option *ngFor="let archetype of archetypes" [ngValue]="archetype">{{ archetype }}</option>
        </select>
      </label>

      <label>
        Sire
        <input type="text" formControlName="sire" />
      </label>

      <label>
        Concept
        <input type="text" formControlName="concept" />
      </label>
    </form>

    <div class="btn-group" role="group">
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
        flex-direction: column;
      }

      form label {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class EditBackgroundComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  clans = clans;
  archetypes = archetypes;
  sects = sects;
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    clan: new FormControl(''),
    sect: new FormControl(''),
    nature: new FormControl(''),
    demeanor: new FormControl(''),
    sire: new FormControl(''),
    concept: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'attributes' }),
      error => console.error(error)
    );
  }
}
