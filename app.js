'use strict';

// Запись короче:
const res = fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then(({ products }) => {
        console.log(products);
        return fetch("https://dummyjson.com/products/" + products[0].id)
        // возвращаем новый промис таким образом 
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });
    // чейн промисов, последовательность запросов  









