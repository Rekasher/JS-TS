'use strict';

const sumTwoSmallestNumbers = numbers => numbers.sort((a, b) => a - b).slice(0,2).reduce((a, b) => a + b);

console.log(sumTwoSmallestNumbers( [19, 5, 42, 2, 77]))