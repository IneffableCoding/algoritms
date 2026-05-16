/*
Написать класс EventEmmiter, аналог addeventlistener.
Метод метод on, который вызывается с именем события и функцией
Метод off, который вызывается также с названием события и функцией
Метод emit, который триггерит все функции
*/

/*
Создаем поле класса, где будем хранить функции по каждому названию собития - 
это будет объект, типа Record<string, Function[]>
В on, если по такому типу нет событий, создается пустой массив и пушим в него функцию
В off делаем фильтр и удаляем найденную функцию
В emit проходим через forEach по функциям и вызываем их
 */

// Хранилище событий: { событие: [слушатели] }
class EventEmitter {
  events = {};

  // Подписка
  on(eventName, listener) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(listener);
  }

  // Отписка
  off(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (fn) => fn !== listener,
      );
    }
  }

  // Вызов всех слушателей события
  emit(eventName, ...args) {
    this.events[eventName]?.forEach((listener) => listener(...args));
  }
}

// Пример
const emitter = new EventEmitter();

const greet = (name) => console.log(`Hello, ${name}!`);

emitter.on("greet", greet);
emitter.emit("greet", "Alice"); // Hello, Alice!

emitter.off("greet", greet);
emitter.emit("greet", "Bob"); // (ничего)

/*
on	-  Добавляет функцию в массив слушателей

off	-  Удаляет функцию из массива (через filter)

emit -  Вызывает все функции из массива с переданными аргументами
*/
