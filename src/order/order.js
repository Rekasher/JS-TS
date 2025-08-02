'use strict';

const order = words => words
    .split(' ')
    .map(word => {
        return {[word]: +word.replace(/\D/g, '')}
    }).sort((a, b) => Object.values(a)[0] - Object.values(b)[0])
    .map(element => Object.keys(element)[0])
    .join(' ');

console.log(order('is2 Thi1s T4est 3a'));