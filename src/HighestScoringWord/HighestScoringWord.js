const high = x => {
  const counts = x.split(' ').map(el => el.split('').reduce((acc, el) => acc + (el.charCodeAt(0) - 'a'.charCodeAt(0) + 1), 0));
  return x.split(' ')[counts.indexOf(Math.max(...counts))];
}

console.log(high('man i need a taxi up to ubud'))