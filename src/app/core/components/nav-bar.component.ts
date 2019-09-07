import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";

@Component({
  selector: "app-nav-bar",
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z6">
      <div id="page-actions-container">
        <ng-container *ngIf="this.state.selectedRouteIsUserPage$ | async">
          <button
            mat-icon-button
            class="workspace-button"
            [routerLink]="['/characters']"
          >
            <mat-icon>arrow_back</mat-icon>
          </button>
        </ng-container>
        <ng-container *ngIf="this.state.selectedRouteIsCharactersPage$ | async">
          <button
            *ngIf="this.state.isMobile$ | async"
            mat-icon-button
            (click)="this.state.toggleCharacterListSidenav()"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <button
            mat-flat-button
            color="accent"
            class="workspace-button"
            (click)="openChorniclePicker()"
          >
            {{ ((this.state.selectedChronicle$ | async)?.name)[0] }}
          </button>
          <h2 class="workspace-name" *ngIf="!(this.state.isMobile$ | async)">
            {{ (this.state.selectedChronicle$ | async)?.name }}
          </h2>
        </ng-container>
      </div>

      <div id="app-name-container">
        <h1>Vamp Notebook</h1>
      </div>

      <div id="user-actions-container">
        <button
          mat-icon-button
          aria-label="User Account"
          [routerLink]="['/users']"
        >
          <mat-icon>account_circle</mat-icon>
        </button>
        <button
          *ngIf="
            (this.state.isMobile$ | async) &&
            (this.state.selectedRouteIsCharactersPage$ | async)
          "
          mat-icon-button
          (click)="this.state.toggleNoteListSidenav()"
        >
          <mat-icon>list</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        z-index: 999;
        display: grid;
      }

      .nav-item.disabled[routerLink] a {
        cursor: inherit;
      }

      .workspace-button {
        min-width: 36px;
        padding: 0;
        border-radius: 0;
        font-size: 24px;
      }

      .workspace-button + .workspace-name {
        padding-left: 8px;
      }

      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }

      mat-toolbar div {
        display: flex;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  constructor(public state: StateService) {}

  // https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html#sharing-data-with-the-overlay-component
  openChorniclePicker() {
    // todo add change chronicle
    // this.chroniclePickerDialog.open();
  }
}
