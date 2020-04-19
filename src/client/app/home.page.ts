import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">VTM Notebook</h1>
        <p class="lead">
          Todo: Put pictures or something here later on...
        </p>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor() {}
}
