import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../../core/state.service";
import * as BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";

@Component({
  selector: "app-note-editor",
  template: `
    <mat-card *ngIf="this.state.selectedNote$ | async as selectedNote">
      <mat-card-content>
        <app-inline-input-editor
          text="Title"
          name="title"
          type="text"
          [value]="selectedNote?.title"
          (valueChanged)="this.state.changeNoteFields($event)"
        ></app-inline-input-editor>
        <app-inline-input-editor
          text="Subtitle"
          name="subtitle"
          type="text"
          [value]="selectedNote?.subtitle"
          (valueChanged)="this.state.changeNoteFields($event)"
        ></app-inline-input-editor>
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
