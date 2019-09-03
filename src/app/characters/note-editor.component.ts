import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";
import * as BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";

@Component({
  selector: "app-note-editor",
  template: `
    <mat-card *ngIf="this.state.selectedNote$ | async as selectedNote">
      <mat-card-header>
        <mat-card-title>
          {{ selectedNote?.title }}
        </mat-card-title>
        <mat-card-subtitle>
          {{ selectedNote?.subtitle }}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <ckeditor [editor]="Editor" [data]="selectedNote?.content"></ckeditor>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteEditorComponent {
  public Editor = BalloonBlockEditor;
  constructor(public state: StateService) {}
}
