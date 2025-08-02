const toCamelCase = str => str
    .split(/[-_ ]/)
    .map((word, i) =>
        i === 0 ?
            word
            :
            word[0].toUpperCase() + word.slice(1)
    )
    .join('');

console.log(toCamelCase('camel_case-KEBAB nostFactory'));