'use strict';

const findOutlier = (integers) =>{
    const OddNumbers = integers.filter(i => Math.abs(i) % 2 === 0);
    const EvenNumbers = integers.filter(i => Math.abs(i) % 2 === 1);

    return (OddNumbers.length === 1 ? OddNumbers[0] : EvenNumbers[0]) || 0;
};

console.log(findOutlier([-3]));
console.log(findOutlier([1, 1, 11, 12]));
console.log(findOutlier([1,1,0,1,1]));
console.log(findOutlier([0,0,3,0,0]));


