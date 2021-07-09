import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { SheetAbilitiesField } from "src/app/core/state/state.types";

@Component({
  selector: "app-sheet-abilities",
  templateUrl: "./sheet-abilities.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetAbilitiesComponent {
  @Input() abilitiesFieldList: SheetAbilitiesField[];

  constructor() {}
}
