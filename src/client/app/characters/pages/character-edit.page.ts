import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs';
import { Character } from 'src/shared/models/character';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a routerLink="/characters" i18n>Characters</a>
        </li>
        <li class="breadcrumb-item " *ngIf="(loading$ | async) === false">
          <a [routerLink]="'/characters/' + (this.character$ | async)?.id">{{ (this.character$ | async)?.name }}</a>
        </li>

        <li class="breadcrumb-item active" aria-current="page" *ngIf="(loading$ | async) === false">
          Editing
        </li>
      </ol>
    </nav>

    <div *ngIf="loading$ | async; then loading; else loaded"></div>

    <!-- loading -->
    <ng-template #loading> <app-spinner></app-spinner> </ng-template>

    <!-- loaded -->
    <ng-template #loaded>
      <div *ngIf="this.character$ | async as character">
        <ul class="nav nav-wizard">
          <li [class.active]="(token | async) === 'background'">
            Background Info
          </li>
          <li [class.active]="(token | async) === 'attributes'">
            Attributes
          </li>
          <li [class.active]="(token | async) === 'abilities'">
            Abilities
          </li>
          <li [class.active]="(token | async) === 'advantages'">
            Advantages
          </li>
          <li [class.active]="(token | async) === 'merits-flaws'">
            Merits & Flaws
          </li>
          <li [class.active]="(token | async) === 'rest'">
            Rest
          </li>
          <li [class.active]="(token | async) === 'next'">
            What's Next
          </li>
        </ul>

        <div class="tab-content" *ngIf="token | async as tkn">
          <app-edit-background *ngIf="tkn === 'background'" (next)="next(tkn, character.id)" [characterId]="id"></app-edit-background>
          <app-edit-attributes *ngIf="tkn === 'attributes'" (next)="next(tkn, character.id)" [characterId]="id"></app-edit-attributes>
          <app-edit-abilities *ngIf="tkn === 'abilities'" (next)="next(tkn, character.id)" [characterId]="id"></app-edit-abilities>
          <app-edit-advantages *ngIf="tkn === 'advantages'" (next)="next(tkn, character.id)" [characterId]="id"></app-edit-advantages>
          <app-edit-merits-flaws *ngIf="tkn === 'merits-flaws'" (next)="next(tkn, character.id)" [characterId]="id"></app-edit-merits-flaws>
          <app-edit-rest *ngIf="tkn === 'rest'" [characterId]="id"></app-edit-rest>
          <app-edit-next *ngIf="tkn === 'next'" [characterId]="id"></app-edit-next>
        </div>
      </div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterEditPage implements OnInit {
  id: string;
  loading$: Observable<boolean>;
  character$: Observable<Character>;
  token: Observable<string>;
  progression = ['background', 'attributes', 'abilities', 'advantages', 'merits-flaws', 'rest', 'next'];

  constructor(private route: ActivatedRoute, private router: Router, private characterSvc: CharactersService) {
    this.loading$ = characterSvc.loading$;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.character$ = this.characterSvc.getByKey(this.id);

    this.token = this.route.fragment.pipe(map(fragment => fragment || 'background'));
  }

  showBack(currentTab: string) {
    return currentTab !== this.progression[0];
  }

  showNext(currentTab: string) {
    return currentTab !== this.progression[this.progression.length - 1];
  }

  back(currentTab: string, id: string): void {
    //do some checks here
    const indexOfCurrent = this.progression.findIndex(x => x === currentTab);
    const nextIndex = indexOfCurrent - 1;
    const fragmentName = this.progression[nextIndex];
    this.router.navigate(['/characters', id, 'edit'], { fragment: fragmentName });
  }

  next(currentTab: string, id: string): void {
    //do some checks here
    const indexOfCurrent = this.progression.findIndex(x => x === currentTab);
    const nextIndex = indexOfCurrent === this.progression.length - 1 ? this.progression.length - 1 : indexOfCurrent + 1;
    console.log(indexOfCurrent);
    console.log(nextIndex);
    console.log(this.progression.length);
    const fragmentName = this.progression[nextIndex];
    this.router.navigate(['/characters', id, 'edit'], { fragment: fragmentName });
  }
}
