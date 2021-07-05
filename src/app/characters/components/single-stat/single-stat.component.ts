import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { StateService } from "src/app/core/state/state.service";
import { StatField } from "src/app/core/state/state.types";

@Component({
  selector: "app-single-stat",
  templateUrl: "./single-stat.component.html",
  styleUrls: ["./single-stat.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleStatComponent {
  @Input() stat: StatField;
  public dots: number[];

  constructor(public state: StateService) {}
}
