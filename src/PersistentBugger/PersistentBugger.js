const product  = num => num.toString().split('').reduce((a, b) => a * b, 1);

const persistence = num => {
    let count = 0;
    if (num / 10 >= 1){
        count = 1
        count += persistence(product(num))
    }
    return count;
};

console.log(persistence(39));