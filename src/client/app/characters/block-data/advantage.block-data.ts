import { AdvantageData } from '../data/advantage.data';

export const AdvantageBlock = AdvantageData.map(advantage => ({
  name: advantage.named,
  types: advantage.types.map(type => ({ name: type, points: type.toLocaleLowerCase(), prof: type.toLocaleLowerCase() + 'Prof' })),
  defaultOne: true,
  forPoints: advantage.types.map(type => type.toLocaleLowerCase())
}));
