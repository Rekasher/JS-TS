const sortArray = arr => {
    const odd = arr.filter(item => item % 2).sort((a,b) => a - b);
    return arr.map(item => item % 2 ? odd.shift() : item);
}

console.log(sortArray([-129,20,-3, 12, -21, 400]));