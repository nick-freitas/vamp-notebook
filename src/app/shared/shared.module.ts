import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InlineInputEditorComponent } from "./inline-input-editor/inline-input-editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonMaterialModule } from "../core/common-material.module";

@NgModule({
  declarations: [InlineInputEditorComponent],
  imports: [CommonModule, ReactiveFormsModule, CommonMaterialModule],
  exports: [InlineInputEditorComponent],
})
export class SharedModule {}
