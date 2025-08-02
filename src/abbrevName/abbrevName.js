const abbrevName = name => name
    .split(' ')
    .map(word =>
        word[0].toUpperCase()
    )
    .join();

console.log(abbrevName('Sam Harris'))