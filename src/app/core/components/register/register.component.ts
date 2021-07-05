import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { RegisterUserGQL } from "src/generated/graphql";
import { Observable } from "@apollo/client/utilities";
import { Subscription } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["../login-register.component.scss"],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  registerUser$: Subscription;

  constructor(
    private auth: AngularFireAuth,
    private registerUserGql: RegisterUserGQL
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }

  ngOnInit(): void {}

  async register() {
    const { email, password } = this.registerForm.value;
    const user = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const id = await user.user.uid;

    this.registerUser$ = this.registerUserGql
      .mutate({ uuid: id, email })
      .subscribe();
    console.log(user);
  }

  ngOnDestroy() {
    this.registerUser$?.unsubscribe();
  }
}
