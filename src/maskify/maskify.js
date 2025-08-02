'use strict';

const maskify = s => s.length > 4 ?
    [...Array(s.length-4).fill('#'), ...s.slice(-4)].join('')
    :
    s.slice(-4);

console.log(maskify("4556364607935616"))
