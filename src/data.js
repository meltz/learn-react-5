export const foods = [
  {
    id: 1,
    name: 'Dim Sum',
    description: 'Chinese small one mouth dessert',
  },
  {
    id: 2,
    name: 'Roti John',
    description: 'Indian bread with minced mutton and egg',
  },
  {
    id: 3,
    name: 'Dory fish',
    description: 'Some kind of fish',
  },
  {
    id: 4,
    name: 'White rabbit sweet',
    description: 'Some sweet white sweet, kids like',
  },
];

export const filterItems = (items, query) => {
  query = query.toLowerCase();

  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  );
};
