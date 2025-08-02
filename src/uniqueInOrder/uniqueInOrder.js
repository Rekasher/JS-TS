'use strict';

const uniqueInOrder = iterable =>
    [...iterable]
        .filter((item, pos, arr) => arr[pos] !== arr[pos - 1])


console.log(uniqueInOrder([1, 2, 3, 4, 5]));