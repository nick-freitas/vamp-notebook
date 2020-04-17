import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.page';
import { PageNotFoundComponent } from './page-not-found.page';
import { CharacterComponent } from './characters/character.page';
import { CharacterListComponent } from './characters/character-list.page';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
