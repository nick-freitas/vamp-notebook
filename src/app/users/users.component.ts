import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  templateUrl: "./users.component.html",
  styles: ["./users.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  constructor() {}
}
