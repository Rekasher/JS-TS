const digitize = n => [...n.toString()].map(n => +n).reverse();

console.log(digitize(35231));