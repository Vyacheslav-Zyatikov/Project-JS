"use strict";
// задача 2

let a = 2;
let x = 1 + (a *= 2);
console.log(a);
console.log(x);
/*
* 1. сначало присваивается число 2 переменной a
* 2. по приоритету идёт выражение в скобках (a *= 2), его можно расписать как ( a = a * 2),
* подставляем присвоенное число в переменную a (a = 2 * 2), т.е получется значение 4, которое
* присваивается переменной a
* 3. остаётся значение x = 1 + 4, отсюда x = 5, т.е переменной x присваивается значение числа 5
* */