import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { CommonMaterialModule } from "../core/common-material.module";
import { SharedModule } from "../shared/shared.module";
import { DefaultsTabComponent } from "./components/defaults-tab.component";

@NgModule({
  declarations: [UsersComponent, DefaultsTabComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CommonMaterialModule,
    SharedModule,
  ],
})
export class UsersModule {}
