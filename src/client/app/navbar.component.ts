import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header>
      <span routerLink="/" src="assets/vtm-icon.png" id="brand"> VTM Notebook</span>

      <i id="account" class="material-icons" routerLink="/account" routerLinkActive="active">account_circle</i>
    </header>
    <nav>
      <ul>
        <li routerLink="/chronicle" routerLinkActive="active">
          <span>Chronicle</span>
        </li>
        <li routerLink="/characters" routerLinkActive="active">
          <span>Characters</span>
        </li>
        <li routerLink="/notes" routerLinkActive="active">
          <span>Notes</span>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor() {}
}
