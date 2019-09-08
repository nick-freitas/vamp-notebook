import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { CommonMaterialModule } from "./core/common-material.module";
import { AppComponent } from "./app.view";
import { NavBarComponent } from "./core/components/nav-bar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
