/**
 #### Условие задачи:

    Объясните, что происходит в данном коде и какой будет вывод в консоль при 
    его выполнении.
    
    Какими способами можно это исправить? (минимум 2)
 */

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  });
}

// Решения

//====== передача копии значения через 3 аргумент
for (var i = 0; i < 3; i++) {
  setTimeout((arg) => console.log(arg), 1000, i);
}

//====== заменить var на let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//====== обернуть в IIFE чтобы создать замыкание
for (var i = 0; i < 3; i++) {
  (function (arg) {
    setTimeout(() => console.log(arg), 1000);
  })(i);
}
