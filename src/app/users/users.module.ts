import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.view";
import { CommonMaterialModule } from "../core/common-material.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, CommonMaterialModule]
})
export class UsersModule {}
