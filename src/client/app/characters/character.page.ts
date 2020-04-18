import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from './characters.service';
import { Character } from '../../../shared/models/character';

@Component({
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a routerLink="/characters" i18n>Characters</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page" *ngIf="(loading$ | async) === false">
          {{ (this.character$ | async)?.name }}
        </li>
      </ol>
    </nav>

    <div *ngIf="loading$ | async; then loading; else loaded"></div>

    <!-- loading -->
    <ng-template #loading> <app-spinner></app-spinner> </ng-template>

    <!-- loaded -->
    <ng-template #loaded>
      <div *ngIf="this.character$ | async as character" id="sheet-container">
        <div class="alert alert-warning" role="alert" *ngIf="unimplemetedFeatureMessage !== null">
          {{ unimplemetedFeatureMessage }}
        </div>

        <app-sheet-top-card [character]="character" (edit)="edit($event)" (delete)="delete($event)" (export)="export($event)"></app-sheet-top-card>
        <app-background-info [character]="character"></app-background-info>
        <app-attributes [character]="character"></app-attributes>
        <app-abilities [character]="character"></app-abilities>
        <app-advantages [character]="character"></app-advantages>
        <app-sheet-bottom-card [character]="character"></app-sheet-bottom-card>
      </div>
    </ng-template>
  `,
  styles: [
    `
      #sheet-container > :not(:last-child) {
        margin-bottom: 8px;
      }
    `
  ]
})
export class CharacterComponent implements OnInit {
  unimplemetedFeatureMessage: string;
  loading$: Observable<boolean>;
  character$: Observable<Character>;

  constructor(private route: ActivatedRoute, private router: Router, private characterSvc: CharactersService) {
    this.unimplemetedFeatureMessage = null;
    this.loading$ = characterSvc.loading$;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.character$ = this.characterSvc.getByKey(id);
  }

  delete(id: string) {
    this.unimplemetedFeatureMessage = 'Delete is disabled because it actually deletes...';

    // this.characterSvc.delete(id);
    // this.router.navigateByUrl('/characters');
  }

  edit(id: string) {
    this.unimplemetedFeatureMessage = 'Editing not implemented';
  }

  export(id: string) {
    console.log('exporting');
    this.characterSvc.export(id);
    //.pipe(tap(conosle.log('something')));
    console.log('exported');
  }
}
