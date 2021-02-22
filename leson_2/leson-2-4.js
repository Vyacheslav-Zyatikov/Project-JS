"use strict";
// Вводим два числа
let num1 = +prompt("Введите число 1");
let num2 = +prompt("Введите число 2");

/**
 * Функция сложения двух чисел
 * @param num1 {number} - Первое число
 * @param num2 {number} - Второе число
 * @returns {number} - Результат суммы
 */
function fold (num1, num2) {
    return num1 + num2;
}

/**
 * Функция разности двух чисел
 * @param num1 {number} - Первое число
 * @param num2 {number} - Второе число
 * @returns {number} - Разность двух чисел
 */
function subtract (num1, num2) {
    return num1 - num2;
}

/**
 * Функция умножения двух чисел
 * @param num1 {number} - Первое число
 * @param num2 {number} - Второе число
 * @returns {number} - Произведение двух чисел
 */
function multiply (num1, num2) {
    return num1 * num2;
}

/**
 * Функция деления двух чисел
 * @param num1 {number} - Первое число
 * @param num2 {number} - Второе число
 * @returns {number} - Результат деления двух чисел
 */
function share (num1, num2) {
    return num1 / num2;
}
//Выводим результаты работы функций
alert("Сумма двух чисел: " + fold(num1, num2));
alert("Разность двух чисел: " + subtract(num1, num2));
alert("Умножение двух чисел: " + multiply(num1, num2));
alert("Деление двух чисел: " + share(num1, num2));