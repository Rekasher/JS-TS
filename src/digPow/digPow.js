const digPow = (n, p) => {
    const result = n
        .toString()
        .split('')
        .reduce((acc, cur, index) => acc += (+cur) ** (+index + +p), 0)
    return result % n === 0 ? result / n : -1
}


console.log(digPow(89,1));