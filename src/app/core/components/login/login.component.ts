import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth.service";
import { LoginRegisterBase } from "../login-register-base";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../login-register.component.scss"],
})
export class LoginComponent extends LoginRegisterBase implements OnDestroy {
  loginForm: FormGroup;
  loginUser$: Subscription;

  constructor(
    private authservice: AuthService,
    protected _snackBar: MatSnackBar
  ) {
    super(_snackBar);

    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      rememberMe: new FormControl(false),
    });
  }

  async loginRegister(): Promise<any> {
    await this.authservice.signIn(this.loginForm.value);
  }

  ngOnDestroy(): void {
    this.loginUser$?.unsubscribe();
  }
}
