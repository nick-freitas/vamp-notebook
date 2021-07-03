import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  template: `
    <div class="content-block">
      <mat-card>
        <mat-card-content>
          Name: Nick
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  constructor() {}
}
