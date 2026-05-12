/**  Условие задачи:
   Напишите функцию memo, которая принимает функцию и мемоизирует ее. То есть если мы вызываем мемоизированную функцию с одними и теми же аргументами несколько раз, она берет значение из кеша
*/

// Стартовый код:

const memo = (fn) => {
  const cache = new Map();

  return function (...args) {
    const stringArgs = JSON.stringify(args);

    if (cache.has(stringArgs)) {
      console.log("from cache");
      return cache.get(stringArgs);
    }

    const result = fn(...args);
    cache.set(stringArgs, result);
    return result;
  };
};

const count = (a, b) => {
  return a + b;
};

const memoCount = memo(count);

console.log(memoCount(1, 2)); // 3 (вызов count)
console.log(memoCount(3, 1)); // 4 (вызов count)
