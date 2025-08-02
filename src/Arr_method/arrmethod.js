

Array.prototype.findUnique = function() {
  return this.filter((el, pos, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log([10,5,10,0,6,6,7,2,9,9].findUnique());

const a = ['foo', 'bar'];

const obj = {
  a: 12,
  b: 24,
  c: {
    g: a,
    h: a,
  }
}

const obj2 = structuredClone(obj); // глубокое копирование

obj2.a = 1;
obj2.c.g[1] = 'not';

console.log(obj);
console.log(obj2);


let arr = [1,[2,[1,1,1]],3,4,5,6,7,8];

let arr2 = structuredClone(arr);

arr2[1][1][1] = 12;

console.log(arr);
console.log(arr2);

console.log("\n\n\n\n")

// const { foo: [bar], bar: foo} = {foo: [1], bar: [2]}
// console.log('3)', foo, bar)

// const {foo: [bar], bar: foo} = {foo: [1], bar: [{baz: 3}]}
// console.log('4)', foo, bar);

const {foo: [bar], bar: [{baz: foo}]} = {foo: [1], bar: [{baz:3}]}
console.log('5)', foo, bar);