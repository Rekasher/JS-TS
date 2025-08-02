const isPangram = s => [... new Set(s.toLowerCase().replace(/\W|\d/g,''))].length === 26;

console.log(isPangram('The quick brown2 fox jumps over the lazy dog'));
console.log(isPangram('abcdefghijklmnOpqrstuvwxyz'));