'use strict';

// const duplicateEncode = word => {
//
//     const duplicate = new Set();
//     const symbols = word.toLowerCase().split('');
//     symbols.forEach((word, pos, arr) => {
//         if (pos > arr.indexOf(word)) {
//             duplicate.add(word);
//         }
//     })
//     return symbols.map(symbol => duplicate.has(symbol) ? ')' : '(').join('');
// }


const duplicateEncode = word => {
    return word
        .toLowerCase()
        .split('')
        .map((elem, pos, arr) =>
            arr.indexOf(elem) === arr.lastIndexOf(elem) ? '(' : ')'
        )
        .join('');
}

console.log(duplicateEncode("Success")); // "()()()"