import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../core/state.service";

@Component({
  template: `
    <mat-sidenav-container autosize>
      <mat-sidenav
        [mode]="(state.isMobile$ | async) ? 'over' : 'side'"
        [opened]="state.isCharacterListSidenavOpen$ | async"
        (closed)="state.closeCharacterListSidenav()"
      >
        <app-sidenav-character-list></app-sidenav-character-list>
      </mat-sidenav>
      <mat-sidenav
        [mode]="(state.isMobile$ | async) ? 'over' : 'side'"
        [opened]="state.isNoteListSidenavOpen$ | async"
        (closed)="state.closeNoteListSidenav()"
        position="end"
      >
        <app-sidenav-note-list></app-sidenav-note-list>
      </mat-sidenav>

      <mat-sidenav-content class="main-sidenav-content">
        <div class="content-block">
          <app-character-sheet
            *ngIf="!(state.selectedNote$ | async)"
          ></app-character-sheet>
          <app-note-editor
            *ngIf="state.selectedNote$ | async"
          ></app-note-editor>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host,
      mat-sidenav-container,
      mat-sidenav-container > mat-sidenav-content {
        display: grid;
        height: 100%;
      }

      .character-name-list {
        display: flex;
        flex-direction: column;
        padding-left: 8px;
      }

      .character-portrait {
        width: 100%;
        height: auto;
      }

      .sheet-top-block {
        display: flex;
        flex-direction: row;

        .character-portrait + .stat-header {
          margin-left: 12px;
        }
      }

      .stat-block-container > *:not(:first-child) {
        display: flex;
        margin-top: 16px;
      }

      mat-sidenav {
        position: fixed;
        top: 64px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  public characterListOpened: boolean;
  constructor(public state: StateService) {}
}
