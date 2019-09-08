import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-character-portrait",
  template: `
    <mat-card class="upload-character-portrait-card">
      <mat-card-content>
        <ng-container
          *ngIf="
            (state.selectedCharacter$ | async)?.imageUrl?.length;
            then hasImageLoaded;
            else needToUploadImage
          "
        ></ng-container>
        <ng-template #hasImageLoaded>
          <img
            class="character-portrait"
            [src]="(state.selectedCharacter$ | async)?.imageUrl"
            alt="Character Portrait"
          />
        </ng-template>
        <ng-template #needToUploadImage> UPLOAD CHARACTER PORTRAIT</ng-template>
      </mat-card-content>
      <mat-action-list>
        <button mat-button>
          UPLOAD
        </button>
        <button mat-button color="warn">
          REMOVE
        </button>
      </mat-action-list>
    </mat-card>
  `,
  styles: [
    `
      img {
        max-height: 300px;
      }

      mat-card-content {
        display: grid;
        place-content: center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterPortraitComponent implements OnInit {
  constructor(public state: StateService) {}

  ngOnInit() {}
}
