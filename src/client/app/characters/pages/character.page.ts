import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from '../characters.service';
import { Character } from '../../../../shared/models/character';

@Component({
  templateUrl: 'character.page.html',
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
    this.router.navigateByUrl(`/characters/${id}/edit`);
  }

  export(id: string) {
    console.log('exporting');
    this.characterSvc.export(id);
    //.pipe(tap(conosle.log('something')));
    console.log('exported');
  }
}
