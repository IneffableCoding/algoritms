setTimeout(() => {
  console.log(1);
});

const prom1 = new Promise((resolve, reject) => {
  console.log(3);
  resolve(4);
});

console.log(2);

prom1.then((resp) => {
  console.log(resp);
});

(function () {
  console.log(5);
})();

// 3 2 5 4 1