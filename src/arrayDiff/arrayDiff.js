'use strict';

const arrayDiff = (a, b) => a.filter(item => !~b.indexOf(item));

console.log(arrayDiff([1, 2, 2, 2, 3, 3, 4, 5], [1, 2, 4]));