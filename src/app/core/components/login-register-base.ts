import { FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from "@angular/material/snack-bar";
import { environment } from "src/environments/environment";

export abstract class LoginRegisterBase {
  loginRegisterForm: FormGroup;
  currentError: MatSnackBarRef<TextOnlySnackBar>;
  lockScreen: boolean;

  constructor(protected _snackBar: MatSnackBar) {}

  abstract loginRegister(): Promise<any>;

  public async handleClick(cb?: (data: any) => any): Promise<void> {
    this.currentError?.dismiss();
    this.lockScreen = true;
    this.loginRegisterForm.disable();
    this.loginRegister()
      .then((data) => cb?.(data))
      .catch((err) => {
        this.currentError = this.openSnackBar(err, "Close");
        if (environment.debugErrors) {
          console.error(err);
        }
      })
      .finally(() => {
        this.lockScreen = false;
        this.loginRegisterForm.enable();
      })
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, action);
  }
}
