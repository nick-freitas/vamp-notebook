import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-inline-input-editor",
  templateUrl: "./inline-input-editor.component.html",
  styleUrls: ["./inline-input-editor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineInputEditorComponent implements OnChanges {
  @Input() editWarning: string;
  @Input() selectionOptionList: any[];
  @Input() type: string;
  @Input() text: string;
  @Input() name: string;
  @Input() value: any;
  @Output() valueChanged: EventEmitter<any>;
  public editMode: boolean;
  public formGroup: FormGroup;

  constructor() {
    this.valueChanged = new EventEmitter<any>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      this.createFormGroup(
        changes.name.currentValue,
        changes.value.currentValue
      );
    }
  }

  public editField(): void {
    this.editMode = true;
  }

  public saveChanges(): void {
    this.editMode = false;
    this.valueChanged.emit(this.formGroup.value);
  }

  public cancelChanges(): void {
    this.editMode = false;
    this.createFormGroup(this.name, this.value);
  }

  private createFormGroup(fieldName: string, fieldValue: any): void {
    this.formGroup = new FormGroup({
      [fieldName]: new FormControl(fieldValue),
    });
  }
}
