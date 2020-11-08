import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from '../characters.service';
import { Character } from '../../../../shared/models/character';
import { AbilityBlock } from '../block-data/ability.block-data';
import { AttributeBlock } from '../block-data/attribute.block-data';
import { DisciplineBlock } from '../block-data/discipline.block-data';
import { BackgroundBlock } from '../block-data/background.block-data';
import { VirtuesBlock } from '../block-data/virtues.block-data';

@Component({
  template: `
    <div *ngIf="loading$ | async; then loading; else loaded"></div>

    <!-- loading -->
    <ng-template #loading> <app-spinner></app-spinner> </ng-template>

    <!-- loaded -->
    <ng-template #loaded>
      <div *ngIf="this.character$ | async as character" id="sheet-container">
        <div class="row">
          <nav aria-label="breadcrumb" class="col-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a routerLink="/characters">Characters</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{ character.name }}</li>
            </ol>
          </nav>
        </div>

        <div class="row" *ngIf="unimplemetedFeatureMessage !== null">
          <div class="col-12">
            <div class="alert alert-warning " role="alert">
              {{ unimplemetedFeatureMessage }}
            </div>
          </div>
        </div>

        <!-- {{ character | json }} -->

        <app-sheet-top-card [character]="character" (edit)="edit($event)" (delete)="delete($event)" (export)="export($event)"></app-sheet-top-card>
        <app-background-info [character]="character"></app-background-info>
        <app-abilities id="attributes" [character]="character" [dataBlocks]="this.attributesDataBlocks"></app-abilities>
        <app-abilities id="abilities" [character]="character" [dataBlocks]="this.abilityDataBlocks"></app-abilities>
        <app-abilities id="advantages" [character]="character" [dataBlocks]="this.advantageDataBlocks"></app-abilities>
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
export class CharacterPage implements OnInit {
  unimplemetedFeatureMessage: string;
  loading$: Observable<boolean>;
  character$: Observable<Character>;
  abilityDataBlocks: any;
  attributesDataBlocks: any;
  advantageDataBlocks: any;

  constructor(private route: ActivatedRoute, private router: Router, private characterSvc: CharactersService) {
    this.unimplemetedFeatureMessage = null;
    this.loading$ = characterSvc.loading$;

    this.abilityDataBlocks = AbilityBlock;
    this.attributesDataBlocks = AttributeBlock;
    this.advantageDataBlocks = [DisciplineBlock, BackgroundBlock, VirtuesBlock];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.character$ = this.characterSvc.getByKey(id);
  }

  delete(id: string) {
    this.unimplemetedFeatureMessage = `Delete is disabled because it actually deletes and I don't want lose anythign.`;

    // this.characterSvc.delete(id);
    // this.router.navigateByUrl('/characters');
  }

  edit(id: string) {
    this.unimplemetedFeatureMessage = `Editing is disabled because it isn't very nice to use. Todo...`;
    // this.router.navigateByUrl(`/characters/${id}/edit`);
  }

  export(id: string) {
    console.log('exporting');
    this.characterSvc.export(id);
    //.pipe(tap(conosle.log('something')));
    console.log('exported');
  }
}
