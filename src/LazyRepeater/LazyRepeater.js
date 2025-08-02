const makeLooper = str => {
  let i = 0;
  return function () {
    const char = str[i];
    i = (i + 1) % str.length;
    return char;
  }
}

const abc = makeLooper('hello');

console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());