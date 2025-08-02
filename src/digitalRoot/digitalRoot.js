'use strict';

const  digitalRoot = (n) => {
    const sum= n.toString().split('').reduce((acc, cur) => +acc + +cur, 0)
    return  sum / 10 >= 1 ? digitalRoot(sum) : sum;
}

/*function digitalRoot(n) {
    return (n - 1) % 9 + 1;
}*/

console.log(digitalRoot(111));