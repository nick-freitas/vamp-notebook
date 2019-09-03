import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-nav-bar role="header"></app-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host {
        display: grid;

        grid:
          "nav-bar" 128px
          "main";
      }

      main {
        grid-area-label: "main";
      }

      app-nav-bar {
        grid-area-label: "nav-bar";
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
