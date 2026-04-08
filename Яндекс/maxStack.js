/**
 * Реализовать структуру данных MaxStack, в которой есть методы:
 *
 * pop() – удаляет и возвращает последний добавленный элемент за O(1),
 * кидает исключение или возвращает ошибку, если стек пустой
 *
 * push(value) – добавляет элемент в стек за O(1)
 *
 * max() – возвращает максимальное значение среди всех элементов стека за O(1),
 * кидает исключение или возвращает ошибку, если стек пустой
 */

class MaxStack {
  constructor() {
    this.stack = []; // Основной стек для хранения элементов
    this.maxStack = []; // Стек для хранения текущих максимумов
  }

  push(value) {
    this.stack.push(value);
    // Если maxStack пуст или новый элемент >= текущего максимума
    if (
      this.maxStack.length === 0 ||
      value >= this.maxStack[this.maxStack.length - 1]
    ) {
      this.maxStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }

    const popped = this.stack.pop();
    // Если удаляемый элемент равен текущему максимуму
    if (popped === this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.pop();
    }

    return popped;
  }

  max() {
    if (this.maxStack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.maxStack[this.maxStack.length - 1];
  }
}

// Пример использования
const stack = new MaxStack();
stack.push(2);
// max = 2, stack = [2]
console.log(stack.max()); // 2

stack.push(1);
// max = 2, stack = [2, 1]
console.log(stack.max()); // 2

stack.push(3);
// max = 3, stack = [2, 1, 3]
console.log(stack.max()); // 3

stack.push(3);
// max = 3, stack = [2, 1,

/*
Объяснение работы:

Два стека:
stack - обычный стек для хранения элементов
maxStack - стек для хранения текущих максимумов


Метод push(value):
Добавляем элемент в основной стек
Если maxStack пуст или новый элемент ≥ текущего максимума, добавляем его и в maxStack

Метод pop():
Удаляем элемент из основного стека
Если удаляемый элемент равен текущему максимуму, удаляем его и из maxStack
Возвращаем удаленный элемент

Метод max():
Просто возвращаем верхний элемент из maxStack
*/
