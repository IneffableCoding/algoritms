// Дан массив целых чисел numbers, который уже отсортирован в неубывающем порядке,
// найдите два числа, которые в сумме дают определенное target число
// Верните индексы двух чисел в виде массива

// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [1, 2]

const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];

    if (total === target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
};
