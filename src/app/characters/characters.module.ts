import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { CommonMaterialModule } from "../common-material.module";
import { SharedModule } from "../shared/shared.module";

import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { SidenavCharacterListComponent } from "./sidenav-character-list.component";
import { SidenavNoteListComponent } from "./sidenav-note-list.component";
import { NoteEditorComponent } from "./note-editor.component";
import { CharacterSheetComponent } from "./character-sheet.component";
import { SheetHeaderComponent } from "./sheet-header.component";
import { SheetAttributesComponent } from "./sheet-attributes.component";
import { SheetAbilitiesComponent } from "./sheet-abilities.component";
import { SingleStatComponent } from "./single-stat.component";

@NgModule({
  declarations: [
    CharactersComponent,
    SidenavCharacterListComponent,
    SidenavNoteListComponent,
    NoteEditorComponent,
    CharacterSheetComponent,
    SheetHeaderComponent,
    SheetAttributesComponent,
    SheetAbilitiesComponent,
    SingleStatComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    CKEditorModule,
    SharedModule
  ]
})
export class CharactersModule {}
