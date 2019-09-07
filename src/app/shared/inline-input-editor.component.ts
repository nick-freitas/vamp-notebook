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
    <div class="display-value" *ngIf="!editMode">
      <label>
        {{ text }}
      </label>
      <span>
        {{ value }}
      </span>
      <button mat-icon-button matSuffix>
        <mat-icon (click)="editMode = true">edit</mat-icon>
      </button>
    </div>
    <form [formGroup]="formGroup" *ngIf="editMode">
      <mat-form-field>
        <ng-container [ngSwitch]="type">
          <textarea
            *ngSwitchCase="'textarea'"
            matInput
            [type]="type"
            [placeholder]="text"
            [value]="value"
            [formControlName]="name"
            [readonly]="!editMode"
          ></textarea>
          <input
            *ngSwitchDefault
            matInput
            [type]="type"
            [placeholder]="text"
            [value]="value"
            [formControlName]="name"
            [readonly]="!editMode"
          />
        </ng-container>

        <button mat-icon-button matSuffix color="accent">
          <mat-icon (click)="saveChanges()">save</mat-icon>
        </button>
        <button mat-icon-button matSuffix>
          <mat-icon (click)="cancelChanges()">cancel</mat-icon>
        </button>
      </mat-form-field>
      <div class="edit-warning-box alert-box" *ngIf="editWarning">
        {{ editWarning }}
      </div>
      <!-- <div class="error-box alert-box" *ngIf="">
      </div> -->
    </form>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }

      .display-value label {
        font-weight: 600;
      }

      .alert-box {
        padding: 0.75rem 1.25rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
      }

      .alert-box:not(:first-of-type) {
        margin-top: 8px;
      }

      .edit-warning-box {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }

      .error-box {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
