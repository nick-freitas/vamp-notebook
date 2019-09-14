import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { StatField } from "src/app/core/state.types";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-single-stat",
  templateUrl: "./single-stat.component.html",
  styleUrls: ["./single-stat.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleStatComponent {
  @Input() stat: StatField;
  public dots: number[];

  constructor(public state: StateService) {}
}
