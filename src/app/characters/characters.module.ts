import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { CommonMaterialModule } from "../common-material.module";
import { SidenavCharacterListComponent } from "./sidenav-character-list.component";
import { SidenavNoteListComponent } from "./sidenav-note-list.component";
import { NoteEditorComponent } from "./note-editor.component";
import { CharacterSheetComponent } from "./character-sheet.component";

@NgModule({
  declarations: [
    CharactersComponent,
    SidenavCharacterListComponent,
    SidenavNoteListComponent,
    NoteEditorComponent,
    CharacterSheetComponent
  ],
  imports: [CommonModule, CharactersRoutingModule, CommonMaterialModule]
})
export class CharactersModule {}
