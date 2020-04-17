import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {
  transform(character: Character, fields: string[], defaultOne?: boolean): number {
    return fields.map(field => character[field]).reduce((acc, field) => acc + (defaultOne ? field - 1 : field), 0);
  }
}
