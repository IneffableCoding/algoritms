/*
const str = "I Love UJIS+!"
Посчитай количество гласных символов в строке
функция должна вернуть число символов
*/

function countVowels(str) {
  // Определяем все гласные
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  // Проходим по каждому символу строки
  for (const char of str.toLowerCase()) {
    // Приводит строку к нижнему регистру
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

const str = "I Love UJIS+!";
console.log(countVowels(str)); // Вывод: 5
