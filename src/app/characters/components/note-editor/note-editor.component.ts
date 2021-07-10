import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { StateService } from "../../../core/state/state.service";
import * as BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";
import { NoteService } from "../../note.service";

@Component({
  selector: "app-note-editor",
  templateUrl: "./note-editor.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteEditorComponent {
  @Input() note;
  public Editor = BalloonBlockEditor;

  constructor(public state: StateService, public noteService: NoteService) {}
}
