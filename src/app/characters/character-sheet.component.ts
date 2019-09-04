import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-character-sheet",
  template: `
    <mat-card class="upload-character-portrait-card">
      <mat-card-content>
        <!-- <img
          *ngIf="selectedCharacter?.imageUrl?.length"
          class="character-portrait"
          [src]="selectedCharacter.imageUrl"
          alt="Character Portrait"
          *ngIf="!selectedCharacter?.imageUrl?.length"
        /> -->
        TODO UPLOAD CHARACTER PORTRAIT
      </mat-card-content>
    </mat-card>
    <app-sheet-header></app-sheet-header>
    <app-sheet-attributes></app-sheet-attributes>
    <app-sheet-abilities></app-sheet-abilities>

    <!-- <indigo-bit-character-sheet-header
        class="col-lg-9"
        [characterSheet]="this.state.selectedCharacter$ | async"
      ></indigo-bit-character-sheet-header> -->

    <!-- <indigo-bit-character-sheet-attributes></indigo-bit-character-sheet-attributes>

    <indigo-bit-character-sheet-abilities></indigo-bit-character-sheet-abilities> -->
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-gap: 16px;

        grid-template-areas:
          "char-portrait sheet-header sheet-header"
          "sheet-attributes sheet-attributes sheet-attributes"
          "sheet-abilities sheet-abilities sheet-abilities";
      }

      .upload-character-portrait-card {
        grid-area: char-portrait;
      }

      app-sheet-header {
        grid-area: sheet-header;
      }

      app-sheet-attributes {
        grid-area: sheet-attributes;
      }

      app-sheet-abilities {
        grid-area: sheet-abilities;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSheetComponent {
  constructor() {}
}
