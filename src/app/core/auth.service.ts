import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { GetSelfUserGQL, RegisterUserGQL, Users } from "src/generated/graphql";
import firebase from "firebase";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: {
    uuid: string;
    name?: string;
  };

  constructor(
    private auth: AngularFireAuth,
    private registerUserGql: RegisterUserGQL,
    private getSelfUserGQL: GetSelfUserGQL
  ) {
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
          return;
        }

        localStorage.removeItem("user");
      });
  }

  get isSignedIn(): boolean {
    return !!JSON.parse(localStorage.getItem("user"));
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

    return this.auth.signInWithEmailAndPassword(email, password);
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
