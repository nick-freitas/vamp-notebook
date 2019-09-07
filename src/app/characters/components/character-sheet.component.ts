import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

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
    <app-sheet-header
      id="core-header"
      [headerFieldList]="
        (this.state.characterSheetFields$ | async).coreHeaderFieldList
      "
    ></app-sheet-header>
    <app-sheet-header
      id="sub-header"
      [headerFieldList]="
        (this.state.characterSheetFields$ | async).subHeaderFieldList
      "
    ></app-sheet-header>
    <app-sheet-header
      id="concept-header"
      [headerFieldList]="
        (this.state.characterSheetFields$ | async).conceptHeaderFieldList
      "
    ></app-sheet-header>
    <app-sheet-attributes
      [attributesFieldList]="
        (this.state.characterSheetFields$ | async).attributesFieldList
      "
    ></app-sheet-attributes>
    <app-sheet-abilities
      [abilitiesFieldList]="
        (this.state.characterSheetFields$ | async).abilitiesFieldList
      "
    ></app-sheet-abilities>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-gap: 16px;

        grid-template-areas:
          "char-portrait "
          "core-header"
          "sub-header"
          "concept-header"
          "sheet-attributes"
          "sheet-abilities";
      }

      @media (min-width: 840px) {
        :host {
          grid-template-areas:
            "char-portrait core-header core-header"
            "char-portrait sub-header sub-header"
            "char-portrait concept-header concept-header"
            "sheet-attributes sheet-attributes sheet-attributes"
            "sheet-abilities sheet-abilities sheet-abilities";
        }
      }

      .upload-character-portrait-card {
        grid-area: char-portrait;
      }

      #core-header {
        grid-area: core-header;
      }

      #sub-header {
        grid-area: sub-header;
      }

      #concept-header {
        grid-area: concept-header;
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
  constructor(public state: StateService) {}
}
