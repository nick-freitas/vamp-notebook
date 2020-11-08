export const DisciplineBlock = {
  name: 'Disciplines',
  types: Array(5)
    .fill(0)
    .map((_, index) => ({
      typeNameIsCharactered: true,
      name: `disciplineName${index + 1}`,
      points: `disciplinePoints${index + 1}`,
      prof: `disciplineProf${index + 1}`
    }))
};
