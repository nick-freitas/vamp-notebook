import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "src/app/core/state.service";

@Component({
  selector: "app-sidenav-character-list",
  template: `
    <div class="existing-character-list">
      <ng-container
        *ngFor="
          let clan of (this.state.selectedChronicle$ | async)?.clans;
          let index = index
        "
      >
        <mat-nav-list *ngIf="clan.characters.length">
          <mat-divider *ngIf="index"></mat-divider>
          <h1 matSubheader>{{ clan.name }}</h1>

          <a
            *ngFor="let character of clan?.characters"
            mat-list-item
            [class.selected-menu-item]="
              character.id === (this.state.selectedCharacter$ | async).id
            "
            (click)="this.state.changeSelectedCharacter(character)"
          >
            {{ character.name }}
          </a>
        </mat-nav-list>
      </ng-container>
    </div>

    <mat-nav-list>
      <mat-divider></mat-divider>

      <a mat-list-item routerLinkActive="list-item-active">
        (+) New Character
      </a>
    </mat-nav-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      .clan-name {
        font-size: 16px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavCharacterListComponent {
  constructor(public state: StateService) {}
}
