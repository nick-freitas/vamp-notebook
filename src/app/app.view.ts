import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "./core/state.service";
import { MatSnackBar } from "@angular/material";

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
        height: 100%;

        /* this isnt going to work on mobile */
        grid:
          "nav-bar" 64px
          "main";
      }

      main {
        grid-area: main;
      }

      app-nav-bar {
        grid-area: nav-bar;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar, private state: StateService) {
    this.state.updateAvailable$.subscribe(
      updateAvailable => updateAvailable && this.promptForUpdate()
    );
  }

  promptForUpdate() {
    const updateMessage = "There is a new version of the application available";
    const actionMessage = "Reload";
    const config = { duration: 60 * 1000 };
    const snackBarRef = this.snackBar.open(
      updateMessage,
      actionMessage,
      config
    );

    snackBarRef
      .afterDismissed()
      .subscribe(
        dismissed =>
          dismissed.dismissedByAction && this.state.updateApplication()
      );
  }
}
