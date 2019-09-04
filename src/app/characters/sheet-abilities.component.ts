import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-sheet-abilities",
  template: `
    <mat-card>
      sheet-abilities works!
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetAbilitiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
