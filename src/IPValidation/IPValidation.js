const isValidIP = str => str
    .split('.')
    .filter(value =>
        value.length === parseInt(value).toString().length
        &&
        value <= 255 && value >= 0
    )
    .length === 4;

console.log(isValidIP('0.0.0.0'));