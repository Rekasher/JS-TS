const filter_list = l => l.filter(i => typeof i === 'number');

console.log(filter_list([1,2,'aasf','1','123',123]));
console.log(filter_list([1,"a","b",0, 15]));