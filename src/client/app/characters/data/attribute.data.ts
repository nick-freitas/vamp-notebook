const AttributeData = [
  { named: 'Physical', types: ['Strength', 'Dexterity', 'Stamina'] },
  { named: 'Mental', types: ['Charisma', 'Manipulation', 'Appearance'] },
  { named: 'Social', types: ['Perception', 'Intelligence', 'Wits'] }
];

export const AttributeBlock = AttributeData.map(attribute => ({
  name: attribute.named,
  types: attribute.types.map(type => ({ name: type, points: type.toLocaleLowerCase(), prof: type.toLocaleLowerCase() + 'Prof' })),
  defaultOne: true,
  forPoints: attribute.types.map(type => type.toLocaleLowerCase())
}));
