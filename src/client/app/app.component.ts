import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 32px;
      }
    `
  ]
})
export class AppComponent {}
