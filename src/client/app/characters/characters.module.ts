import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListPage } from './pages/character-list.page';
import { CharacterPage } from './pages/character.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CharactersService } from './characters.service';
import { SheetTopCardComponent } from './components/sheet-top-card.component';
import { BackgroundInfoComponent } from './components/background-info.component';
import { AttributesComponent } from './components/attributes.component';
import { AbilitiesComponent } from './components/abilities.component';
import { AdvantagesComponent } from './components/advantages.component';
import { SheetBottomCardComponent } from './components/sheet-bottom-card.component';
import { StatBlockComponent } from './components/stat-block.component';
import { CharacterEditPage } from './pages/character-edit.page';
import { EditBackgroundComponent } from './components/edit-background.component';
import { EditAttributesComponent } from './components/edit-attributes.component';
import { EditAbilitiesComponent } from './components/edit-abilities.component';
import { EditAdvantagesComponent } from './components/edit-advantages.component';
import { EditMeritsFlawsComponent } from './components/edit-merits-flaws.component';
import { EditRestComponent } from './components/edit-rest.component';
import { EditNextComponent } from './components/edit-next.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterPage,
    CharacterListPage,
    SheetTopCardComponent,
    BackgroundInfoComponent,
    AttributesComponent,
    AbilitiesComponent,
    AdvantagesComponent,
    StatBlockComponent,
    SheetBottomCardComponent,
    CharacterEditPage,
    EditBackgroundComponent,
    EditAttributesComponent,
    EditAbilitiesComponent,
    EditAdvantagesComponent,
    EditMeritsFlawsComponent,
    EditRestComponent,
    EditNextComponent
  ],
  imports: [CommonModule, SharedModule, CoreModule, FormsModule, ReactiveFormsModule],
  providers: [CharactersService]
})
export class CharactersModule {}
