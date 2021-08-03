import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginRegisterBase } from "../login-register-base";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["../login-register.component.scss"],
})
export class RegisterComponent extends LoginRegisterBase  {
  loginRegisterForm: FormGroup;
  

  constructor(
    private authservice: AuthService,
    protected _snackBar: MatSnackBar
  ) {
    super(_snackBar);

    this.loginRegisterForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  async loginRegister(): Promise<any> {
    await this.authservice.register(this.loginRegisterForm.value);
  }  
}
