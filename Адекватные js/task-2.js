/*
1. Вернуть объект с ключами type из масива,
значение - массив элементов с таким type

2. Вернуть объект с ключами type, а значение - объект
вида {count: количество, weight: суммарный вес}
*/

const arr = [
  { type: "banana", weight: 32 },
  { type: "apple", weight: 24 },
  { type: "kiwi", weight: 55 },
  { type: "banana", weight: 44 },
  { type: "orange", weight: 5 },
];

const groupByType = (arr) => {
  const grouped = {}; // для пункта 1
  const stats = {}; // для пункта 2

  arr.forEach((item) => {
    const { type, weight } = item;

    // === ПУНКТ 1 ===
    const { type: _, ...rest } = item;
    if (grouped[type]) {
      grouped[type].push(rest);
    } else {
      grouped[type] = [rest];
    }

    // === ПУНКТ 2 ===
    if (stats[type]) {
      stats[type].count += 1;
      stats[type].weight += weight;
    } else {
      stats[type] = { count: 1, weight: weight };
    }
  });

  return { grouped, stats };
};

console.log(groupByType(arr));

/*
{
  grouped: {
    banana: [ [Object], [Object] ],
    apple: [ [Object] ],
    kiwi: [ [Object] ],
    orange: [ [Object] ]
  },
  stats: {
    banana: { count: 2, weight: 76 },
    apple: { count: 1, weight: 24 },
    kiwi: { count: 1, weight: 55 },
    orange: { count: 1, weight: 5 }
  }
}
*/