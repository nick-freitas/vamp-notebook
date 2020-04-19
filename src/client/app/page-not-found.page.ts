import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <br /><br />
      <p>The Page you are looking for doesn't exist or an other error occured.</p>
      <p>Go to <a routerLink="/">Home Page.</a></p>
    </div>
  `,
  styles: [
    `
      h1 {
        font-size: 80px;
        font-weight: 800;
        text-align: center;
      }
      h2 {
        font-size: 25px;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 12px;
        margin-bottom: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
  constructor() {}
}
