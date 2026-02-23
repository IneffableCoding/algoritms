/*
Римские цифры представлены семью различными символами: I, V, X, L, и.CDM

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Например, 2 записывается как II римская цифра, просто две единицы, сложенные вместе.
12 записывается как  XII, что просто X + II. Число 27 записывается как XXVII, что XX + V + II.

Римские цифры обычно пишутся от большего к меньшему слева направо.
Однако цифра для четырех не IIII. Вместо этого число четыре записывается как IV.
Поскольку единица стоит перед пятью, мы вычитаем ее, получая четыре.
Тот же принцип применим к числу девять, которое записывается как IX.
Существует шесть случаев, когда используется вычитание:

I можно поместить перед V(5) и X(10), чтобы получить 4 и 9.
X можно поместить перед L(50) и C(100), чтобы получить 40 и 90.
C можно разместить перед D(500) и M(1000), чтобы получить 400 и 900.

Данную римскую цифру преобразуйте в целое число.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

const romanToInt = function (s) {
  let res = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      res -= roman[s[i]];
    } else {
      res += roman[s[i]];
    }
  }

  return res + roman[s[s.length - 1]];
  // прибавляет последнюю римскую цифру, которую цикл не обработал,
};

/*
Алгоритм конвертирует римские цифры в обычные числа
*/

console.log(romanToInt("III")); // → 3 (1+1+1)
console.log(romanToInt("VII")); // → 7 (5+1+1)
console.log(romanToInt("XII")); // → 12 (10+1+1)
console.log(romanToInt("XX")); // → 20 (10+10)

console.log(romanToInt("IV")); // → 4 (5-1)
console.log(romanToInt("IX")); // → 9 (10-1)
console.log(romanToInt("XL")); // → 40 (50-10)
console.log(romanToInt("XC")); // → 90 (100-10)
