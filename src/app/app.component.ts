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
        grid-area: "main";
      }

      app-nav-bar {
        grid-area: "nav-bar";
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
