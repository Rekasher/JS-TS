'use strict';

const normalise=a=>a.map(e=>Math.abs(~-e))

console.log(normalise([0, 0, 1])); // [1, 1, 0]
console.log(normalise([0, 1]));
console.log(normalise([1, 0, 1])); // [0, 1, 0]
console.log(normalise([0, 0, 1, 0, 1, 0])); // [1, 1, 0, 1, 0, 1]