import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <a class="navbar-brand" routerLink="/">
        <img src="assets/vtm-icon.png" width="30" height="30" class="d-inline-block align-top" alt="" />
        <span i18n>VTM Project</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/characters" routerLinkActive="active" i18n>Characters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/chronicles" routerLinkActive="active" i18n>Chronicles</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
