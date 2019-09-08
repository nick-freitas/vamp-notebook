import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-sidenav-note-list",
  template: `
    <div class="existing-notes-list">
      <mat-nav-list>
        <a
          mat-list-item
          [class.selected-menu-item]="!(state.selectedNote$ | async)"
          (click)="
            state.changeSelectedNote(null); state.closeNoteListSidenav(true)
          "
        >
          Character Sheet
        </a>
        <a
          *ngFor="let note of (state.selectedCharacter$ | async)?.notes"
          mat-list-item
          [class.selected-menu-item]="
            note?.id === (state.selectedNote$ | async)?.id
          "
          (click)="
            state.changeSelectedNote(note); state.closeNoteListSidenav(true)
          "
        >
          {{ note.title }}
        </a>
      </mat-nav-list>
    </div>

    <mat-nav-list>
      <mat-divider></mat-divider>

      <a mat-list-item routerLinkActive="list-item-active">
        (+) New Note
      </a>
    </mat-nav-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      .existing-notes-list > .mat-list-base {
        padding-top: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavNoteListComponent {
  constructor(public state: StateService) {}
}
