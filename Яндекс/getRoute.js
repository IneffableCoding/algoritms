/*
У нас есть набор билетов вида:

[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]

Из этих билетов можно построить единственный, неразрывный маршрут. 
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает эти же объекты билетов
в порядке следования по маршруту. Начало маршрута известно
*/

function getRoute(tickets = [], start) {
  // Хэш-таблица: ключ = город отправления, значение = объект билета
  const ticketMap = {};

  // Проходим по каждому билету
  for (const ticket of tickets) {
    // Кладём билет в хэш-таблицу по городу отправления
    ticketMap[ticket.from] = ticket;
  }

  // Массив для билетов в правильном порядке
  const route = [];

  // Начинаем с известного стартового города
  let currentCity = start;

  // Пока есть текущий город И существует билет из этого города
  while (currentCity && ticketMap[currentCity]) {
    // Проверка if (currentCity) — это просто вопрос: "У нас есть какой-то город или ничего?
    // Берём билет для текущего города
    const ticket = ticketMap[currentCity];

    // Добавляем билет в маршрут
    route.push(ticket);

    // Перемещаемся в следующий город (куда ведёт билет)
    currentCity = ticket.to;
  }

  // Возвращаем билеты в порядке следования
  return route;
}

const tickets = [
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" },
];

const start = "NY";
const route = getRoute(tickets, start);
console.log(route);
