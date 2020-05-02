import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>VTM Notebook</span>
        <mat-icon id="account" class="material-icons" routerLink="/account">account_circle</mat-icon>
      </mat-toolbar-row>
    </mat-toolbar>

    <nav>
      <ul>
        <li routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
          <span>Home</span>
        </li>
        <li routerLink="/chronicles" routerLinkActive="active">
          <span>Chronicles</span>
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
