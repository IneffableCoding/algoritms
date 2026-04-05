/*
Напишите функцию toSnakeCase(str), которая принимает строку в формате CamelCase 
и возвращает её в формате snake_case.
*/

function toSnakeCase(str) {
  let result = ""; // 1. Создаём пустую строку для результата

  for (let i = 0; i < str.length; i++) {
    // 2. Проходим по каждому символу строки

    // 3. Проверяем:
    //    - i !== 0 → не первый символ
    //    - str[i] === str[i].toUpperCase() → текущий символ в верхнем регистре? (заглавная буква)
    if (i !== 0 && str[i] === str[i].toUpperCase()) {
      result += "_"; // 4. Если да → добавляем подчёркивание
    }

    result += str[i].toLowerCase(); // 5. Добавляем текущий символ в нижнем регистре
  }

  return result; // 6. Возвращаем готовую строку
}

console.log(toSnakeCase("camelCase")); // "camel_case"

console.log(toSnakeCase("CamelCase")); // "camel_case"

console.log(toSnakeCase("thisIsATest")); // "this_is_a_test"

console.log(toSnakeCase("ConvertMeNow")); // "convert_me_now"

console.log(toSnakeCase("alreadySnake")); // "already_snake"
