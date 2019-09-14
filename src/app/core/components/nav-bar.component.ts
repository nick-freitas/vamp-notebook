import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "../state.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [
    `
      :host {
        z-index: 999;
        display: grid;
      }

      .nav-item.disabled[routerLink] a {
        cursor: inherit;
      }

      .workspace-button {
        min-width: 36px;
        padding: 0;
        border-radius: 0;
        font-size: 24px;
      }

      .workspace-button + .workspace-name {
        padding-left: 8px;
      }

      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }

      mat-toolbar div {
        display: flex;
      }
    `,
    `
      @media print {
        :host {
          display: none;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  constructor(public state: StateService) {}

  // https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html#sharing-data-with-the-overlay-component
  openChorniclePicker() {
    // todo add change chronicle
    // this.chroniclePickerDialog.open();
  }
}
