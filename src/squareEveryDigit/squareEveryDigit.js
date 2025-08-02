'use strict';

function squareDigits(num){
    return +num.toString().split('').map(i => i**2).join('');
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
