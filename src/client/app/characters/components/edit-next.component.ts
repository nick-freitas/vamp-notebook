import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-edit-next',
  template: `
    <p>
      You're all set! Click 'Next' to see the finished character sheet.
    </p>

    <div class="btn-group" role="group">
      <button type="button" class="btn btn-outline-primary" [routerLink]="['/characters/', characterId, 'edit']" fragment="rest">Previous</button>

      <button type="button" class="btn btn-outline-primary" [routerLink]="'/characters/' + characterId">Next</button>
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
export class EditNextComponent implements OnInit {
  @Input() characterId: string;

  constructor() {}

  ngOnInit(): void {}
}
