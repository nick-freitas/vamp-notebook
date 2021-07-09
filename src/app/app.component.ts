import { Component, ChangeDetectionStrategy } from "@angular/core";
import { StateService } from "./core/state/state.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar, private state: StateService) {
    this.state.updateAvailable$.subscribe(
      (updateAvailable) => updateAvailable && this.promptForUpdate()
    );
  }

  promptForUpdate(): void {
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
        (dismissed) =>
          dismissed.dismissedByAction && this.state.updateApplication()
      );
  }
}
