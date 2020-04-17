import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CharactersModule } from './characters/characters.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home.page';
import { PageNotFoundComponent } from './page-not-found.page';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CommonModule, HttpClientModule, CoreModule, CharactersModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
