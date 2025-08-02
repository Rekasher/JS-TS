
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))