import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Character } from '../../../shared/models/character';

@Injectable()
export class CharactersService extends EntityCollectionServiceBase<Character> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Character', serviceElementsFactory);
  }
}
