import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable} from "rxjs";
import { BehaviorSubject, of } from "rxjs";
import firebase from "firebase";
import { GetSelfUserGQL, RegisterUserGQL,  } from "src/generated/graphql";


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
    public router: Router,
    public ngZone: NgZone
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

          this.setIsSignedIn();

          // if we just authenticated and we are currently in the login page or the register page,
          // then bring them to the main page since the sign in method itself is inconsistent
          if (this.router.url === "/login" || this.router.url === '/register') {
            return this.router.navigate(["/characters"]);
          }

          return;
        }

        localStorage.removeItem("user");
        this.setIsSignedIn();
      });
  }

  private setIsSignedIn(): void {
    this.isSignedIn$.next(!!JSON.parse(localStorage.getItem("user")));
  }

  async signIn({
    email,
    password,
    rememberMe,
  }): Promise<firebase.auth.UserCredential> {
    return this.auth
      .setPersistence(
        rememberMe
          ? firebase.auth.Auth.Persistence.LOCAL
          : firebase.auth.Auth.Persistence.SESSION
      )
      .then(() => this.auth.signInWithEmailAndPassword(email, password))
      .then((res) => {
        return res;
      });
  }

  signOut(): Promise<void> {
    return this.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

  async register({ name, email, password }): Promise<firebase.auth.UserCredential> {
    await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await this.registerUserGql.mutate({ email, name }).toPromise();

    return this.signIn({email, password, rememberMe: true});
  }
}
