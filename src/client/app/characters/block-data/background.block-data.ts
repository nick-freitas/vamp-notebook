export const BackgroundBlock = {
  name: 'Backgrounds',
  types: Array(5)
    .fill(0)
    .map((_, index) => ({
      typeNameIsCharactered: true,
      name: `backgroundName${index + 1}`,
      points: `backgroundPoints${index + 1}`,
      prof: `backgroundProf${index + 1}`
    }))
};
