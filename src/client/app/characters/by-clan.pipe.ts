import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/shared/models/character';

@Pipe({
  name: 'byClan'
})
export class ByClanPipe implements PipeTransform {
  transform(value: Character[], ...args: unknown[]): unknown {
    if (!value.length) return value;

    const charactersByClan = [];
    const clans = {};
    value.forEach(character => {
      const clan = `Clan ${character.clan || 'Unknown'}`;

      clans[clan] = clans[clan] || [];
      clans[clan].push(character);
    });

    Object.keys(clans).forEach(clan => charactersByClan.push({ clan, characters: clans[clan] }));
    return charactersByClan;
  }
}
