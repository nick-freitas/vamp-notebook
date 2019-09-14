import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CharactersView } from "./characters.view";
import { PrintableCharacterSheetComponent } from "./components/printable-character-sheet/printable-character-sheet.component";

const routes: Routes = [
  { path: "", component: CharactersView },
  { path: "print", component: PrintableCharacterSheetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {}
