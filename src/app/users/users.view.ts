import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  templateUrl: "./users.view.html",
  styles: [
    `
      .tab-block {
        padding-top: 16px;
        margin: 1px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  constructor() {}
}
