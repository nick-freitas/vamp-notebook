import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-confirm-change",
  template: ` <p [mat-dialog-close]="'true'">CLOSE</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmChangeComponent {
  constructor() {}
}
