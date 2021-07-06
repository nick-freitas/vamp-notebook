import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/auth/auth.guard";
import { LoginComponent } from "./core/components/login/login.component";
import { RegisterComponent } from "./core/components/register/register.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "/characters", pathMatch: "full" },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./characters/characters.module").then((m) => m.CharactersModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
