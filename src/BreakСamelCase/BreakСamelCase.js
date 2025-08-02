const solution = s => s.replace(/[A-Z]/g, match => ' ' + match);

console.log(solution('camelCaSing'));