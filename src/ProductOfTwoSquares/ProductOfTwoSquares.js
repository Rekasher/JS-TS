const squareProduct = n => {
  const result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const value = Math.sqrt(n / i**2);
    if (i > value) break;
    if (value % 1 === 0) {
      result.push([i, value])
    }
  }
  return result;
}

console.log(squareProduct(256));