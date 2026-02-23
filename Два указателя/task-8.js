// Дан массив целых чисел nums, отсортированный в неубывающем порядке.
// Вернуть массив квадратов каждого числа, отсортированный в неубывающем порядке.

// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

const sortedSquares = function (nums) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[i] = nums[left] ** 2;
      left++;
    } else {
      res[i] = nums[right] ** 2;
      right--;
    }
  }
  return res;
};

// function sortedSquares(nums) {
//   const result = [];
//   let left = 0;
//   let right = nums.length - 1;
//   let index = right;

//   while (left <= right) {
//     const leftSquare = nums[left] * nums[left];
//     const rightSquare = nums[right] * nums[right];

//     if (leftSquare > rightSquare) {
//       result[index] = leftSquare;
//       left++;
//     } else {
//       result[index] = rightSquare;
//       right--;
//     }
//     index--;
//   }

//   return result;
// }