import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-sheet-header",
  templateUrl: "./sheet-header.component.html",
  styleUrls: ["./sheet-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetHeaderComponent {
  constructor(public dialog: MatDialog) {}
}
