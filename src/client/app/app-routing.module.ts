import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomePage } from './home.page';
import { PageNotFoundComponent } from './page-not-found.page';
import { CharacterPage } from './characters/pages/character.page';
import { CharacterListPage } from './characters/pages/character-list.page';
import { CharacterEditPage } from './characters/pages/character-edit.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'characters', component: CharacterListPage },
  { path: 'characters/:id', component: CharacterPage },
  { path: 'characters/:id/edit', component: CharacterEditPage },
  { path: '**', component: PageNotFoundComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
