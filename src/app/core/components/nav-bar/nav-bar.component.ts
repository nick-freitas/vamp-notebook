import { Component, ChangeDetectionStrategy } from "@angular/core";
import { AuthService } from "../../auth.service";
import { StateService } from "../../state/state.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  constructor(public state: StateService, public auth: AuthService) {}

  // https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html#sharing-data-with-the-overlay-component
  // openChorniclePicker() {
  // todo add change chronicle
  // this.chroniclePickerDialog.open();
  // }
}
