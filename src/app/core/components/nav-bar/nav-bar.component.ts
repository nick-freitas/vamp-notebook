import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SelectedViewService } from "../../../characters/selected-view.service";
import { AuthService } from "../../auth.service";
import { MobileService } from "../../mobile.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  constructor(
    public mobileService: MobileService,
    public auth: AuthService,
    public selectedViewService: SelectedViewService
  ) {}

  // https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html#sharing-data-with-the-overlay-component
  // openChorniclePicker() {
  // todo add change chronicle
  // this.chroniclePickerDialog.open();
  // }
}
