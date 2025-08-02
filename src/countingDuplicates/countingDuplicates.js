'use strict';

const duplicateCount= (text) => {
    return text
        .toLowerCase()
        .split('')
        .filter((i, pos, arr) => pos > arr.indexOf(i))
        .filter((i, pos, arr) => arr.indexOf(i) === pos)
        .length;
}

console.log(duplicateCount('Indivisibilities'));