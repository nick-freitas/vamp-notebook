export const AbilityData = [
  {
    named: 'Talent',
    types: ['Alertness', 'Athletics', 'Awareness', 'Brawl', 'Empathy', 'Expression', 'Intimidation', 'Leadership', 'Streetwise', 'Subterfuge']
  },
  { named: 'Skill', types: ['Animal Ken', 'Crafts', 'Drive', 'Etiquette', 'Firearms', 'Larceny', 'Melee', 'Performance', 'Stealth', 'Survival'] },
  { named: 'Knowledge', types: ['Academics', 'Computer', 'Finance', 'Investigation', 'Law', 'Medicine', 'Occult', 'Politics', 'Science', 'Technology'] }
];
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
