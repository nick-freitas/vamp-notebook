import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";

@Component({
  selector: "app-characters",
  template: `
    <mat-sidenav-container autosize>
      <mat-sidenav
        mode="side"
        opened="this.state.isCharacterListSidenavOpen$ | async"
      >
        <app-sidenav-character-list></app-sidenav-character-list>
      </mat-sidenav>
      <mat-sidenav
        mode="side"
        position="end"
        opened="this.state.isNoteListSidenavOpen$ | async"
      >
        <app-sidenav-note-list></app-sidenav-note-list>
      </mat-sidenav>

      <mat-sidenav-content class="main-sidenav-content">
        <div class="content-block">
          <app-character-sheet
            *ngIf="!(this.state.selectedNote$ | async)"
          ></app-character-sheet>
          <app-note-editor
            *ngIf="this.state.selectedNote$ | async"
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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  constructor(public state: StateService) {}
}
