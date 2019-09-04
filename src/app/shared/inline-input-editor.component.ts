import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-inline-input-editor",
  template: `
    <form [formGroup]="formGroup">
      <mat-form-field>
        <input
          matInput
          [type]="type"
          [placeholder]="text"
          [value]="value"
          [formControlName]="name"
          [readonly]="!editMode"
        />
        <button mat-icon-button matSuffix *ngIf="!editMode">
          <mat-icon (click)="editMode = true">edit</mat-icon>
        </button>
        <button mat-icon-button matSuffix *ngIf="editMode" color="accent">
          <mat-icon (click)="saveChanges()">save</mat-icon>
        </button>
        <button mat-icon-button matSuffix *ngIf="editMode">
          <mat-icon (click)="cancelChanges()">cancel</mat-icon>
        </button>
      </mat-form-field>
    </form>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineInputEditorComponent implements OnChanges {
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

  public editField() {
    this.editMode = true;
  }

  public saveChanges() {
    this.editMode = false;
    this.valueChanged.emit(this.formGroup.value);
  }

  public cancelChanges() {
    this.editMode = false;
    this.createFormGroup(this.name, this.value);
  }

  private createFormGroup(fieldName: string, fieldValue: any) {
    this.formGroup = new FormGroup({
      [fieldName]: new FormControl(fieldValue)
    });
  }
}
