import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <!-- <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>VTM Notebook</span>
        <mat-icon id="account" class="material-icons" routerLink="/account">account_circle</mat-icon>
      </mat-toolbar-row>
    </mat-toolbar> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">VTM Notebook</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item" routerLink="/chronicles" routerLinkActive="active">
            <a class="nav-link">Chronicles</a>
          </li>
          <li class="nav-item" routerLink="/characters" routerLinkActive="active">
            <a class="nav-link">Characters</a>
          </li>
          <li class="nav-item" routerLink="/notes" routerLinkActive="active">
            <a class="nav-link">Notes</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-dark my-2 my-sm-0" type="submit" routerLink="/account">Log in</button>
        </form>
      </div>
    </nav>

    <!-- <nav>
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
    </nav> -->
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor() {}
}
