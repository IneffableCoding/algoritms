/*
Оплата за проживание в отеле

Необходимо написать функцию расчета стоимости проживания посетителя в отеле
Функция может принимать 2 аргумента
1. Количество ночей проживания в отеле (обязательный параметр)
2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
Стоимость проживания в будние дни (с понедельника по пятницу) стоит 1500 руб.
Стоимость проживания в выходные дни (суббота, воскресенье) стоит 2200 руб.
*/

const prices = {
  weekday: 1500,
  holiday: 2200,
};

const getPricy = (nights, date = new Date()) => {
  let curDate = date;
  let price = 0;

  for (i = 0; i < nights; i++) {
    const dayNum = curDate.getDay();

    if (dayNum === 6 || dayNum === 0) {
      price += prices.holiday;
    } else {
      price += prices.weekday;
    }

    curDate.setDate(curDate.getDate() + 1);
  }

  return price;
};

console.log(getPricy(7)); // 11900
console.log(getPricy(3, new Date("2023-11-10"))); // 5900
