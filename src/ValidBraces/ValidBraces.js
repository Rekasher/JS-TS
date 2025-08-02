const validBraces = braces => {
  const stack = [];
  const map = { '(': ')', '[': ']', '{': '}' };
  for (const b of braces) {
    if (map[b]) stack.push(map[b]);
    else if (stack.pop() !== b) return false;
  }
  return stack.length === 0;
};

console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('(}'));
console.log(validBraces('[(])'));

const duplicateOrUnique = (arr) => {
  const numbersData = arr.sort((a, b) => a - b);
  const isDuplicate = arr.lastIndexOf(arr[0]) === 0 && arr.indexOf(arr.at(-1)) === -1;


  return isDuplicate;
}

console.log(eval(`${-31057022}${"-"}(${-55850246})`))
