// Дан целочисленный массив nums, вернуть все триплеты, [nums[i], nums[j], nums[k]]
// такие что i != j, i != k, и j != k, и nums[i] + nums[j] + nums[k] == 0.

// Обратите внимание, что набор решений не должен содержать повторяющихся триплетов.

// Ввод: nums = [-1, 0, 1, 2, -1, -4]
// Вывод: [[-1, -1, 2], [-1, 0, 1]]

const threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];

      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return res;
};