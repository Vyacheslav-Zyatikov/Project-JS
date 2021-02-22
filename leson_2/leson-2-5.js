"use strict";
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

/**
 * Единая функция вычислений
 * @param num1 {number} - Первое число
 * @param num2 {number} - Второе число
 * @param operation {string} - Операция вычисления (+, -, *, /)
 * @returns {number} - результат вычислений
 */
function mathOperation(num1, num2, operation){
    switch (operation){
        case "+":
            return fold(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return share(num1, num2);
    }
}

alert("Результат ваших вычислений: " + mathOperation(+prompt("Введите число 1"), +prompt("Введите число 2"), prompt("Введите тип операции: +, -, *, /")))
