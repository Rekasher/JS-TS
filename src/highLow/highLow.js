'use strict';

const highAndLow = (numbers) => {
    const digits = numbers.split(' ');
    const max = Math.max(...digits);
    const min = Math.min(...digits);
    return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));