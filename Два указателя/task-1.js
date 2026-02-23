/* 
Напишите функцию, которая переворачивает строку.
Входная строка задана как массив символов s.

Это необходимо сделать, изменив входной массив на месте
с использованием O(1) дополнительной памяти.
*/

Input: s = ["h", "e", "l", "l", "o"];
Output: ["o", "l", "l", "e", "h"];

// Это современный подход к решению с деструктуризацией:
const reverseString = function (s) {
  // Ставим указатели в начало и в конец
  let left = 0;
  let right = s.length - 1;

  // Пока указатели не встретились
  while (left < right) {
    // Меняем элементы местами
    [s[left], s[right]] = [s[right], s[left]];
    // 📦 Это деструктурирующее присваивание (destructuring assignment)

    // Двигаем указатели навстречу друг другу
    left++; // левый идет вправо
    right--; // правый идет влево
  }
};

// const reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   let temp = 0;
//   // 📦 Временное хранилище
//   while (left < right) {
//     temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     left++;
//     right--;
//   }

//   return s;
//   // Функция возвращает ссылку на тот же массив, но внутри он переписан
// };

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // ["o", "l", "l", "e", "h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // ["h", "a", "n", "n", "a", "H"]
