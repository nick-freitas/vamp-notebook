import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rest',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character">
      <label>
        Max Willpower
        <input type="text" formControlName="maxWillpower" />
      </label>

      <label>
        Weakness
        <input type="text" formControlName="weakness" />
      </label>

      <label>
        Experience
        <input type="text" formControlName="experience" />
      </label>
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
        flex-direction: column;
      }
    `
  ]
})
export class EditRestComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  profileForm = new FormGroup({
    maxWillpower: new FormControl(''),
    weakness: new FormControl(''),
    experience: new FormControl('')
  });

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  previous() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'merits-flaws' }),
      error => console.error(error)
    );
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'next' }),
      error => console.error(error)
    );
  }
}
