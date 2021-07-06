import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { GetSelfUserGQL, RegisterUserGQL, Users } from "src/generated/graphql";
import firebase from "firebase";
import { switchMap } from "rxjs/operators";
import { BehaviorSubject, of } from "rxjs";
import { Router } from "@angular/router";

//https://www.positronx.io/full-angular-7-firebase-authentication-system/
@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: {
    uuid: string;
    name?: string;
  };
  isSignedIn$: BehaviorSubject<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private registerUserGql: RegisterUserGQL,
    private getSelfUserGQL: GetSelfUserGQL,
    public router: Router
  ) {
    this.isSignedIn$ = new BehaviorSubject(null);
    this.auth.authState
      .pipe(
        switchMap((user: firebase.User) => {
          if (user) {
            this.user = { uuid: user.uid };
            return this.getSelfUserGQL.watch(this.user).valueChanges;
          }

          this.user = null;
          return of(null);
        })
      )
      .subscribe((user: any) => {
        const resultUser = user?.data?.users_by_pk;
        if (resultUser) {
          this.user = { ...this.user, ...resultUser };
          localStorage.setItem("user", JSON.stringify(this.user));
          console.log(this.user);
          this.setIsSignedIn();
          return;
        }

        localStorage.removeItem("user");
        this.setIsSignedIn();
      });
  }

  private setIsSignedIn() {
    this.isSignedIn$.next(!!JSON.parse(localStorage.getItem("user")));
  }

  async signIn({
    email,
    password,
    rememberMe,
  }): Promise<firebase.auth.UserCredential> {
    await this.auth.setPersistence(
      rememberMe
        ? firebase.auth.Auth.Persistence.LOCAL
        : firebase.auth.Auth.Persistence.SESSION
    );

    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          this.router.navigate(["/"]);
          return resolve(res);
        })
        .catch((err) => reject(err));
    });
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }

  async register({ name, email, password }): Promise<Users> {
    const { user } = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const id = await user.uid;

    return {
      ...(await this.registerUserGql.mutate({ email, name }).toPromise()),
      uuid: id,
    };
  }
}
