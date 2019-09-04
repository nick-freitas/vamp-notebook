import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-sheet-attributes",
  template: `
    <mat-card>
      sheet-attributes works!
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetAttributesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
