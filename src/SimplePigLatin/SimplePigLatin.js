'use strict';

const pigIt = s => s
    .split(' ')
    .map(word => {
        if (word.match(/[a-z]/gi)){
            return word.slice(1) + word[0] + 'ay'
        }
        return word;
    })
    .join(' ');

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This, is! my string'))
console.log(pigIt('Hello world !'))