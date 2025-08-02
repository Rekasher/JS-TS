'use strict';

const alphabetPosition = (text) => {
    return text
        .replace(/[\W_^\d]/g, '')
        .split('')
        .map(letter =>
            letter.charCodeAt(0) >= 'a'.charCodeAt(0)
            ? letter.charCodeAt(0)-'a'.charCodeAt(0) + 1
            : letter.charCodeAt(0)-'A'.charCodeAt(0) + 1
        )
        .join(' ');
}

console.log(alphabetPosition('1&yks^++'));