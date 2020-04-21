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
      <label>
        Law
        <input type="text" formControlName="law" />
      </label>

      <label>
        Investigation
        <input type="text" formControlName="investigation" />
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
export class EditAbilitiesComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;

  profileForm = new FormGroup({
    law: new FormControl(''),
    investigation: new FormControl('')
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
