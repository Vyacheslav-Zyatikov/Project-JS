"use strict";
// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    product.price = product.price - (product.price * 0.15); // применяем скидку 15%
    // полученное значение возвращаем обратно в объект
    // product.saleprice = product.price - (product.price * 0.15); - такой строкой можно создать отдельное
    // свойство saleprice с применённой скидкой
});