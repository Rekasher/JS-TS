const ipsBetween = (start, end) =>
  Math.abs(start.split('.').reduceRight((acc, curr, index, arr) => acc + (curr - end.split('.')[index])*(256**(arr.length-index-1)),0));

console.log(ipsBetween("160.0.0.0", "160.0.1.0"));