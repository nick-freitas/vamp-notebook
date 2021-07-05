import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../login-register.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AngularFireAuth) {
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      rememberMe: new FormControl(false),
    });
  }

  ngOnInit(): void {}

  async login() {
    const { email, password } = this.loginForm.value;
    const user = await this.auth.signInWithEmailAndPassword(email, password);

    console.log(user);
  }
}
