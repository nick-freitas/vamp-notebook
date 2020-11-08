import { AbilityData } from '../data/ability.data';

export const AbilityBlock = AbilityData.map(ability => ({
  name: ability.named,
  types: ability.types.map(type => ({
    name: type,
    points: type === 'Animal Ken' ? 'animalKen' : type.toLocaleLowerCase(),
    prof: (type === 'Animal Ken' ? 'animalKen' : type.toLocaleLowerCase()) + 'Prof'
  })),
  defaultOne: false,
  forPoints: ability.types.map(type => (type === 'Animal Ken' ? 'animalKen' : type.toLocaleLowerCase()))
}));
