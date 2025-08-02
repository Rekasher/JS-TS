function lastDigit(as){
    for (let i = as.length - 2; i >= 0; i--) {
        as[i] = BigInt(as[i].toString()[as[i].toString().length]) ** BigInt(as[i + 1]);
    }
    return as;
}

console.log(lastDigit([12, 30, 21]));