const digitsSum = (number) => number
    .toString()
    .split('')
    .reduce((acc, val) => +acc + +val
    ,0);

const intSumSq = (n,m) => {

    const findSum = Math.sqrt(n);

    if (findSum % 1 > 0) {
        return 'No result';
    }

    const result = [];

    for (let i = 2; i < m; i++){
        if(digitsSum(i) === findSum) result.push(i);
    }

    return result;
}

console.log(intSumSq(15,50));

