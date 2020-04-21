import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { CharactersService } from '../characters.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-merits-flaws',
  template: `
    <form [formGroup]="profileForm" *ngIf="character$ | async as character"></form>
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
    `
  ]
})
export class EditMeritsFlawsComponent implements OnInit {
  @Input() characterId: string;
  character$: Observable<Character>;
  profileForm = new FormGroup({});

  constructor(private characterSvc: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.character$ = this.characterSvc.getByKey(this.characterId).pipe(tap(character => this.profileForm.patchValue(character)));
  }

  next() {
    this.characterSvc.update({ ...this.profileForm.value, id: this.characterId }).subscribe(
      response => this.router.navigate(['/characters', this.characterId, 'edit'], { fragment: 'rest' }),
      error => console.error(error)
    );
  }
}
