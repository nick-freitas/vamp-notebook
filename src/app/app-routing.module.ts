import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/characters", pathMatch: "full" },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./characters/characters.module").then(m => m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
