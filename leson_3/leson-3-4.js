"use strict";
// Задание 4
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
// фильтр обектов с картинками
const product = products.filter (function (product){
    if (product.photos != undefined){
    return product.photos.length > 0;
    }
});
console.log(product) // Вывод1 согласно условию
// Сортировка массива
const sortproducts = products.sort (function compare(sortproduct, sortproduct2) {
        if (sortproduct.price < sortproduct2.price) {
            return -1;
        }
        if (sortproduct.price > sortproduct2.price) {
            return 1;
        }
        return 0;
});
console.log(sortproducts); // Вывод2 согласно условию2