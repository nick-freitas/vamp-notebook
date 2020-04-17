import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">VTM Project</h1>
        <p class="lead">
          For creating character sheets for NPCs
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
