'use strict';


const XO = str => str
        .toLowerCase()
        .split('')
        .filter(x => x === 'o')
        .length
    ===
    str
        .toLowerCase()
        .split('')
        .filter(x => x === 'x')
        .length

console.log(XO('XO'))