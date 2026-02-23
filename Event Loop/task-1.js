const log = () => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  const promise = new Promise((resolve) => resolve());
  promise.then(() => {
    console.log("3");
  });
  setTimeout(() => {
    console.log("4");
  });
  console.log("5");
};

log();

// 1 5 3 4 2 

