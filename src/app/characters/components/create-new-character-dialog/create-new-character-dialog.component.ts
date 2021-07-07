import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: "./create-new-character-dialog.component.html",
  styleUrls: ["./create-new-character-dialog.component.scss"],
})
export class CreateNewCharacterDialogComponent {
  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateNewCharacterDialogComponent>,
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
