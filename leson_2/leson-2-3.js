"use strict"
// вводим числа
let a = +prompt("Ведите первое число.");
let b = +prompt("Ведите второе число.");
// Обработка ошибок ввода
if (isNaN(a) || isNaN(b)){
    alert("Одно или оба введёных значений не число");
}
// Числа положительные
if (a >= 0 && b >= 0){
    alert(a - b);
}
// Числа отрицательные
if (a < 0 && b < 0){
    alert(a * b);
}
// Числа с разными знаками
if ((a < 0 && b > 0) || (a > 0 && b < 0)){
    alert(a + b);
}