export const MeritsBlock = {
  name: 'Merits',
  types: Array(5)
    .fill(0)
    .map((_, index) => ({
      typeNameIsCharactered: true,
      name: `meritName${index + 1}`,
      points: `meritPoints${index + 1}`,
      prof: `meritProf${index + 1}`
    }))
};
