import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
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
