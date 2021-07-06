import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from "@angular/material/snack-bar";
import { environment } from "src/environments/environment";

export abstract class LoginRegisterBase {
  currentError: MatSnackBarRef<TextOnlySnackBar>;

  constructor(protected _snackBar: MatSnackBar) {}

  abstract loginRegister(): Promise<any>;

  public async handleClick(cb?: (data: any) => any) {
    this.currentError?.dismiss();
    this.loginRegister()
      .then((data) => cb?.(data))
      .catch((err) => {
        this.currentError = this.openSnackBar(err, "Close");
        if (environment.debugErrors) {
          console.error(err);
        }
      });
  }

  openSnackBar(message: string, action: string) {
    return this._snackBar.open(message, action);
  }
}
