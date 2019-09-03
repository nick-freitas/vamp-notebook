import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "./state.service";

@Component({
  selector: "app-nav-bar",
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z6">
      <mat-toolbar-row id="top-row">
        <h1>Vamp Notebook</h1>
        <button
          mat-icon-button
          aria-label="User Account"
          [routerLink]="['/users']"
        >
          <mat-icon>account_circle</mat-icon>
        </button>
      </mat-toolbar-row>

      <mat-toolbar-row id="page-row">
        <ng-container *ngIf="this.state.selectedRouteIsUserPage$ | async">
          <button
            mat-icon-button
            color="accent"
            class="workspace-button"
            [routerLink]="['/characters']"
          >
            <mat-icon>arrow_back</mat-icon>
          </button>
          <h2 class="workspace-name">Go Back to Characters</h2>
        </ng-container>
        <ng-container *ngIf="this.state.selectedRouteIsCharactersPage$ | async">
          <ng-container
            *ngIf="this.state.selectedChronicle$ | async as selectedChronicle"
          >
            <button
              mat-flat-button
              color="accent"
              class="workspace-button"
              (click)="openChorniclePicker()"
            >
              {{ (selectedChronicle?.name)[0] }}
            </button>
            <h2 class="workspace-name">{{ selectedChronicle?.name }}</h2>
          </ng-container>
        </ng-container>
      </mat-toolbar-row>
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

      #top-row {
        display: flex;
        justify-content: space-between;
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
