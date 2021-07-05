import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-sheet-header",
  templateUrl: "./sheet-header.component.html",
  styles: ["./sheet-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetHeaderComponent {
  constructor(public state: StateService, public dialog: MatDialog) {}
}
