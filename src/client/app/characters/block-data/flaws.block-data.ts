export const FlawsBlock = {
  name: 'Flaws',
  types: Array(5)
    .fill(0)
    .map((_, index) => ({
      typeNameIsCharactered: true,
      name: `flawName${index + 1}`,
      points: `flawPoints${index + 1}`,
      prof: `flawProf${index + 1}`
    }))
};
