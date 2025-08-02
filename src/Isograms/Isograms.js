const isIsogram = str => str.length === [... new Set(str.toLowerCase())].length ;

console.log(isIsogram("sad"))