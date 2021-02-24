'use strict';
// ЗАдание 1
for (let num = 0; num < 11; num++){
    if (num === 0){
        console.log(num +" - это ноль");
        continue;
    }
    if ( 1 === (num % 2)){
        console.log(num + " - это не чётное число");
    }
    if ( 0 === (num % 2)){
        console.log(num + " - это чётное число");
    }
}