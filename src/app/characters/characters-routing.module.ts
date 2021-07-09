import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersComponent } from "./components/characters/characters.component";
import { PrintableCharacterSheetComponent } from "./components/printable-character-sheet/printable-character-sheet.component";

const routes: Routes = [
  { path: "", component: CharactersComponent },
  { path: "print", component: PrintableCharacterSheetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
