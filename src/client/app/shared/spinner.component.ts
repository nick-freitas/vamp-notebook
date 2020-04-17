import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <span i18n> LOADING </span>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%"></div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
