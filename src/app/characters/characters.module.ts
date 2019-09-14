import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { CommonMaterialModule } from "../core/common-material.module";
import { SharedModule } from "../shared/shared.module";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersView } from "./characters.view";
import { SidenavCharacterListComponent } from "./components/sidenav-character-list.component";
import { SidenavNoteListComponent } from "./components/sidenav-note-list.component";
import { NoteEditorComponent } from "./components/note-editor.component";
import { CharacterSheetComponent } from "./components/character-sheet/character-sheet.component";
import { SheetHeaderComponent } from "./components/sheet-header/sheet-header.component";
import { SheetAttributesComponent } from "./components/sheet-attributes.component";
import { SheetAbilitiesComponent } from "./components/sheet-abilities.component";
import { SingleStatComponent } from "./components/single-stat/single-stat.component";
import { CharacterPortraitComponent } from "./components/character-portrait.component";
import { PrintableCharacterSheetComponent } from "./components/printable-character-sheet/printable-character-sheet.component";
import { CharacterSheetFabComponent } from "./components/character-sheet-fab/character-sheet-fab.component";
import { ConfirmChangeComponent } from "./components/confirm-change.component";

@NgModule({
  declarations: [
    CharactersView,
    SidenavCharacterListComponent,
    SidenavNoteListComponent,
    NoteEditorComponent,
    CharacterSheetComponent,
    SheetHeaderComponent,
    SheetAttributesComponent,
    SheetAbilitiesComponent,
    SingleStatComponent,
    CharacterPortraitComponent,
    PrintableCharacterSheetComponent,
    CharacterSheetFabComponent,
    ConfirmChangeComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    CKEditorModule,
    SharedModule
  ],
  entryComponents: [PrintableCharacterSheetComponent, ConfirmChangeComponent]
})
export class CharactersModule {}
