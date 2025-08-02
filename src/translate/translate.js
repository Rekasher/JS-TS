const translate = (sentence) => {
    const vowels = 'aeiouAEIOU';
    return sentence
        .split(' ')
        .map(word => {
            if ([...vowels].includes(word[0])) return word + 'way';
            const firstVowel = word.split('').some(word => [...vowels].includes(word));
            const isUpperCase = word[0] !== word[0].toLowerCase();
            word = word.toLowerCase();
            const newWord = word.slice(firstVowel) + word.slice(0, firstVowel) + 'ay'
            return isUpperCase ? newWord[0].toUpperCase() + newWord.slice(1) : newWord;
        }).join(' ');
};

console.log(translate('hello'));
console.log(translate('Hello world'));
console.log(translate('Pizza? Yes Please!!'));