import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { flaws } from '../data/flaws.data';
import { merits } from '../data/merits.data';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-merits-flaws',
  template: `
    <div *ngIf="character$ | async as character">
      <div class="alert alert-warning" role="alert" *ngIf="this.errors$ | async as error">
        {{ error }}
      </div>

      <form [formGroup]="profileForm">
        <div>
          <h3>Merits</h3>
          <label>
            <select class="form-control" formControlName="meritName1">
              <option *ngFor="let merit of merits" [ngValue]="merit">{{ merit }}</option>
            </select>

            <input type="number" formControlName="meritPoints1" />
          </label>

          <label>
            <select class="form-control" formControlName="meritName2">
              <option *ngFor="let merit of merits" [ngValue]="merit">{{ merit }}</option>
            </select>
            <input type="number" formControlName="meritPoints2" />
          </label>

          <label>
            <select class="form-control" formControlName="meritName3">
              <option *ngFor="let merit of merits" [ngValue]="merit">{{ merit }}</option>
            </select>
            <input type="number" formControlName="meritPoints3" />
          </label>
          <label>
            <select class="form-control" formControlName="meritName4">
              <option *ngFor="let merit of merits" [ngValue]="merit">{{ merit }}</option>
            </select>
            <input type="number" formControlName="meritPoints4" />
          </label>
          <label>
            <select class="form-control" formControlName="meritName5">
              <option *ngFor="let merit of merits" [ngValue]="merit">{{ merit }}</option>
            </select>
            <input type="number" formControlName="meritPoints5" />
          </label>
        </div>

        <div>
          <h3>Flaws</h3>
          <label>
            <select class="form-control" formControlName="flawName1">
              <option *ngFor="let flaw of flaws" [ngValue]="flaw">{{ flaw }}</option>
            </select>
            <input type="number" formControlName="flawPoints1" />
          </label>

          <label>
            <select class="form-control" formControlName="flawName2">
              <option *ngFor="let flaw of flaws" [ngValue]="flaw">{{ flaw }}</option>
            </select>
            <input type="number" formControlName="flawPoints2" />
          </label>

          <label>
            <select class="form-control" formControlName="flawName3">
              <option *ngFor="let flaw of flaws" [ngValue]="flaw">{{ flaw }}</option>
            </select>
            <input type="number" formControlName="flawPoints3" />
          </label>

          <label>
            <select class="form-control" formControlName="flawName4">
              <option *ngFor="let flaw of flaws" [ngValue]="flaw">{{ flaw }}</option>
            </select>
            <input type="number" formControlName="flawPoints4" />
          </label>

          <label>
            <select class="form-control" formControlName="flawName5">
              <option *ngFor="let flaw of flaws" [ngValue]="flaw">{{ flaw }}</option>
            </select>
            <input type="number" formControlName="flawPoints5" />
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
export class EditMeritsFlawsComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  errors$: BehaviorSubject<string>;
  flaws = flaws;
  merits = merits;
  profileForm = new FormGroup({
    meritName1: new FormControl(''),
    meritName2: new FormControl(''),
    meritName3: new FormControl(''),
    meritName4: new FormControl(''),
    meritName5: new FormControl(''),
    meritPoints1: new FormControl(''),
    meritPoints2: new FormControl(''),
    meritPoints3: new FormControl(''),
    meritPoints4: new FormControl(''),
    meritPoints5: new FormControl(''),
    flawName1: new FormControl(''),
    flawName2: new FormControl(''),
    flawName3: new FormControl(''),
    flawName4: new FormControl(''),
    flawName5: new FormControl(''),
    flawPoints1: new FormControl(''),
    flawPoints2: new FormControl(''),
    flawPoints3: new FormControl(''),
    flawPoints4: new FormControl(''),
    flawPoints5: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {
    this.errors$ = new BehaviorSubject<string>(null);
  }

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'rest' }),
      error => console.error(error)
    );
  }

  previous() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'advantages' }),
      error => console.error(error)
    );
  }
}
