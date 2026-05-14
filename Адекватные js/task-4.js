/*
Написать класс EventEmmiter, аналог addeventlistener.
Метод метод on, который вызывается в именем события и функцией
Метод off, который вызывается также с названием события и функцией
Метод emit, который триггерит все функции
*/

/*
Создаем поле класса, где будем хранить функции по каждому названию собития - это будет объект, типа Record<string, Function[]>
В on, если по такому типа нет событий создается пустой массив и пушим в него функцию
В off делаем фильтр и удаляем найденную функцию
В emit проходим через forEach по функциям и вызываем их
 */

class EventEmitter {
  events = {};

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  off(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (eventListener) => eventListener !== listener,
      );
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener) => {
        listener(...args);
      });
    }
  }
}

// Пример использования
const myEventEmitter = new EventEmitter();

const greetListener = (name) => {
  console.log(`Hello, ${name}!`);
};

myEventEmitter.on("greet", greetListener);
myEventEmitter.emit("greet", "Alice"); // Output: Hello, Alice!

myEventEmitter.off("greet", greetListener);
myEventEmitter.emit("greet", "Bob"); // No output
