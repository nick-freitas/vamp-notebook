import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CharactersModule } from './characters/characters.module';
import { CoreModule } from './core/core.module';
import { HomePage } from './home.page';
import { PageNotFoundComponent } from './page-not-found.page';
import { NavbarComponent } from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMaterial } from './core/ng-material.module';

@NgModule({
  declarations: [AppComponent, HomePage, PageNotFoundComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    CharactersModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterial
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
