import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: "./create-new-chronicle-dialog.component.html",
  styleUrls: ["./create-new-chronicle-dialog.component.scss"],
})
export class CreateNewChronicleDialogComponent {
  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateNewChronicleDialogComponent>,
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
