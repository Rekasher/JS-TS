'use strict';

const multiply = (a, b) => a * b;
const sqr = (a) => a ** 2;
const plusThree = (a) => a + 3;

function goal(...args){
    return (a, b) => {
        const lastArgResult = args[args.length - 1](a,b);
        args.splice(-1);

        return args.reduceRight((acc, cur) => {
            acc = cur(acc);
            return acc;
        }, lastArgResult);
    }
}

console.log(goal(plusThree, sqr, multiply)(2,5));