import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-character-sheet",
  template: `
    <div class="stat-block-container">
      <div class="sheet-top-block row">
        <div class="portrait-container col-lg-3">
          <!-- <img
          *ngIf="selectedCharacter?.imageUrl?.length"
          class="character-portrait"
          [src]="selectedCharacter.imageUrl"
          alt="Character Portrait"
          *ngIf="!selectedCharacter?.imageUrl?.length"
        /> -->
          <mat-card class="upload-character-portrait-card">
            <mat-card-content>
              TODO UPLOAD CHARACTER PORTRAIT
            </mat-card-content>
          </mat-card>
        </div>

        <!-- <indigo-bit-character-sheet-header
        class="col-lg-9"
        [characterSheet]="this.state.selectedCharacter$ | async"
      ></indigo-bit-character-sheet-header> -->
      </div>

      <!-- <indigo-bit-character-sheet-attributes></indigo-bit-character-sheet-attributes>

    <indigo-bit-character-sheet-abilities></indigo-bit-character-sheet-abilities> -->
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSheetComponent {
  constructor() {}
}
