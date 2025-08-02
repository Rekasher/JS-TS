const deleteNth = (arr,n) => {
    const uniqueList = [... new Set(arr)];

    for (let i = 0; i < uniqueList.length; i++) {
        let count = arr.filter(el => el === uniqueList[i]).length - n;
        while (count > 0) {
            arr.splice(arr.lastIndexOf(uniqueList[i]), 1);
            count--;
        }
    }

    return arr;
}


console.log(deleteNth([20,37,20,21], 1)); //[20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2])


const calculate = str => eval(str.replace(/plus/g, '+').replace(/minus/g, '-')).toString();

console.log(calculate('1plus2plus3plus4'))
console.log(calculate('1plus2plus3minus42'));

function getIssuer(number) {
    const str = number.toString();
    const MastercardPrefixes = ['51', '52', '53', '54', '55'];
    const VISAPrefixes = ['4'];
    const DiscoverPrefixes = ['6011'];
    const AMEXPrefixes = ['34 ', '52', '53', '54', '55'];

    switch(number.toString().length) {
        case 15: return 'AMEX';
        case 13: return 'VISA';
        case 16: {
            if(number.toString().startsWith('6011')) return 'Discover';
            if(number.toString().startsWith('4')) return 'VISA';
            if (masterPrefixes.some(prefix => str.startsWith(prefix)) && len === 16) {
                return 'Mastercard';
            }
            break;
        }
        default: return 'Unknown';
    }
}