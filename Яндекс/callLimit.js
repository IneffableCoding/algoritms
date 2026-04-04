/**
 * Написать декоратор для функции, который ограничивает число вызовов.
 *
 * callLimit(fn, limit, callback), принимает следующие аргументы:
 * fn - функция, которую декорируем;
 * limit - максимальное число вызовов;
 * callback - вызывается, когда совершен последний вызов. Опционально.
 * У вызываемой функции должен быть метод для перезагрузки счётчика в начальное положение.
 */

function callLimit(fn, limit, callback) {
  let count = 0;

  const wrap = (...args) => {
    // (...args) — это rest-оператор (оператор остатка)
    // Он собирает все переданные аргументы в массив с именем args.
    if (count < limit) {
      count += 1;
      fn(...args);

      // Вызываем callback после последнего разрешённого вызова
      if (count === limit && typeof callback === "function") {
        callback();
      }
    }
  };

  wrap.reset = () => {
    count = 0;
  };

  return wrap;
}

function log(title, message) {
  console.log(title + ": " + message);
}

// Пример использования 1
var logLimited = callLimit(log, 3);
logLimited("title", "desc"); // Console output: title: desc
logLimited("title2", "desc"); // Console output: title2: desc
logLimited("title3", "desc"); // Console output: title3: desc
logLimited("title4", "desc"); // Ничего не выведется

logLimited.reset(); // Сброс счетчика
logLimited("title5", "desc"); // Console output: title5: desc
logLimited("title6", "desc"); // Console output: title6: desc
logLimited("title7", "desc"); // Console output: title7: desc

// Пример использования 2
var logLimited2 = callLimit(log, 2, () => console.log("finish"));
logLimited2("foo", "bar"); // Console output: foo: bar
logLimited2("foo2", "bar"); // Console output: foo2: bar + finish

/*
Краткое объяснение алгоритма

Что делает: Создаёт "ограниченную" версию функции, которую можно вызвать только N раз.

Как работает (3 шага)

Счётчик count запоминает, сколько раз уже вызвали функцию
Проверка — если count < limit, вызываем функцию и увеличиваем счётчик
Блокировка — когда count === limit, все следующие вызовы игнорируются


Доп. фича
Если передать третий аргумент callback — он выполнится один раз на последнем разрешённом вызове.


Одной фразой
Декоратор, который считает вызовы и после достижения лимита перестаёт вызывать функцию, 
с возможностью сброса счётчика через метод .reset().

Также там работает концепция замыкания (функция wrap)
*/
