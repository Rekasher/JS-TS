'use strict';

const arrayDiffVeryFast = (a, b) => a.filter(item => !~b.indexOf(item));

console.log(arrayDiffVeryFast([1, 2, 2, 2, 3, 3, 4, 5], [1, 2, 4]));
