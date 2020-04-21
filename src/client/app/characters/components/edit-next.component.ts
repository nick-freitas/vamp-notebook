import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-next',
  template: `
    <p>
      Go to character now
    </p>

    <button type="button" class="btn btn-outline-primary" [routerLink]="'/characters/' + characterId">Go to Character Sheet</button>
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
