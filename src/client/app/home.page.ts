import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron">
      <h1 class="display-4">Welcome to the VTM Notebook!</h1>
      <p class="lead">An online character sheet tool for the Vampire: The Masquerade 20th Edition</p>
      <hr class="my-4" />
      <p>At the moment we only show character sheets, but we are working on adding in creating/exporting characters.</p>
      <a class="btn btn-primary btn-lg" href="/learn-more" role="button">Learn more</a>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  constructor() {}
}
