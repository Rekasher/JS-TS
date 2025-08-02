const tribonacci = (signature,n) => {
    for(let i = 0; i < n-3; i++){
        signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return signature.slice(0, n);
}

const findUniq=a=>a.lastIndexOf(a[0]) === 0 ? a[0] : a.find(el => el!==a[0]);

console.log(findUniq([ 1, 0, 1 ]))
