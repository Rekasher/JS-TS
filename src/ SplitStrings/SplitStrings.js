const solution = str => (str+'_').match(/.{2}/g) || []

console.log(solution('abcd'));
