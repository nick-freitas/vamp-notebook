import { Component, OnInit } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-defaults-tab",
  templateUrl: "./defaults-tab.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultsTabComponent {
  constructor(public state: StateService) {}
}
