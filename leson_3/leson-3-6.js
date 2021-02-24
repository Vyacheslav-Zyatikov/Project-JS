"use strict";
// Задание 6
// горка
let x = ""
for (let num = 0; num < 20; console.log(x += "X"), num++){}
// Пирамида
let space = ""
for (let num = 0; num < 10; space += " ", num++){}
let xx = ""
for (let num = 0; num < 10; num++){
    xx += "x"
    space = space.slice(0, space.length-1);
    console.log(space + xx + xx);
}
