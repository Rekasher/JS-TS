const SeriesSum = (n) =>
  Array(n)
    .fill(1)
    .map((el, index) => el + index * 3)
    .reduce((acc, curr) => acc + 1/curr, 0)
    .toFixed(2);

console.log(SeriesSum(0));