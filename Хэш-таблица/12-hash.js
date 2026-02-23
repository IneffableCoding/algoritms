/*  
Дан набор билетов вида:  

[  
    { from: 'London', to: 'Мoscow' },  
    { from: 'NV', to: 'London' },  
    { from: 'Мoscow', to: 'SPb' },  
    ...  
]  

Из этих билетов можно построить единственный, неразрывный маршрут.  
Петель и повторов в маршруте нет.  

Нужно написать программу, которая возвращает эти же объекты билетов в порядке следования по маршруту.  
*/

function sortTickets(tickets) {
  const fromMap = new Map();
  const toMap = new Map();

  // Заполняем карты для быстрого поиска
  for (const ticket of tickets) {
    fromMap.set(ticket.from, ticket.to);
    toMap.set(ticket.to, true);
  }

  // Находим начальную точку маршрута
  let start = null;
  for (const ticket of tickets) {
    if (!toMap.has(ticket.from)) {
      start = ticket.from;
      break;
    }
  }

  // Строим маршрут
  const sortedTickets = [];
  let current = start;
  while (fromMap.has(current)) {
    const next = fromMap.get(current);
    sortedTickets.push({ from: current, to: next });
    current = next;
  }

  return sortedTickets;
}

// Пример 1
const tickets1 = [
  { from: "London", to: "Мoscow" },
  { from: "NV", to: "London" },
  { from: "Мoscow", to: "SPb" },
];

console.log(sortTickets(tickets1));
// Вывод:
// [
//     { from: 'NV', to: 'London' },
//     { from: 'London', to: 'Мoscow' },
//     { from: 'Мoscow', to: 'SPb' },
// ]

// Пример 2
const tickets2 = [
  { from: "Moscow", to: "SPb" },
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Chelyabinsk", to: "Yekatirinburg" },
  { from: "SPb", to: "Chelyabinsk" },
];

console.log(sortTickets(tickets2));
// Вывод:
// [
//     { from: 'NY', to: 'London' },
//     { from: 'London', to: 'Moscow' },
//     { from: 'Moscow', to: 'SPb' },
//     { from: 'SPb', to: 'Chelyabinsk' },
//     { from: 'Chelyabinsk', to: 'Yekatirinburg' },
// ]
