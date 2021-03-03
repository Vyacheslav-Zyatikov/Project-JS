"use strict";
let numberOfUser = +prompt("Введите целое число от 0 до 999");
function transformation(numberOfUser){
    let result = {};
    if (numberOfUser < 0 || numberOfUser > 999 || isNaN(numberOfUser) || !Number.isInteger(numberOfUser) ){
        alert("Введите целое число от 0 до 999");
        return result;
    }
    if (numberOfUser >=0 && numberOfUser <=999){
        result.hundreds = Math.floor(numberOfUser / 100);
        result.tens = Math.floor(numberOfUser / 10 % 10);
        result.units = Math.floor(numberOfUser % 10);
    }
    return result;
}

console.log(transformation(numberOfUser));