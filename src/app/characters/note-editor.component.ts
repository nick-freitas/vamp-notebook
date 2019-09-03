import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";

@Component({
  selector: "app-note-editor",
  template: `
    <mat-card *ngIf="this.state.selectedNote$ | async as selectedNote">
      <mat-card-header>
        <mat-card-title>
          {{ selectedNote?.name }}
        </mat-card-title>
        <mat-card-subtitle>
          {{ selectedNote?.description }}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p [innerHTML]="selectedNote?.content"></p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button disabled>EDIT</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteEditorComponent {
  constructor(public state: StateService) {}
}
