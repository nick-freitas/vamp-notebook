import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-single-stat",
  templateUrl: "./single-stat.component.html",
  styleUrls: ["./single-stat.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleStatComponent {
  @Input() stat: any; //StatField;
  public dots: number[];

  constructor() {}
}
