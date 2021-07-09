import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-create-new-note-dialog",
  templateUrl: "./create-new-note-dialog.component.html",
  styleUrls: ["./create-new-note-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewNoteDialogComponent {
  createForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateNewNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
