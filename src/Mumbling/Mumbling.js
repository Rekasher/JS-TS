// const accum = s => s
//     .split('')
//     .reduce((acc, item, index) => {
//         acc.push(item.toUpperCase() + item.toLowerCase().repeat(index));
//         return acc;
//     }
//     ,[])
//     .join('-');


const accum = s => s.split('').map((el, pos) => (el.toUpperCase() + el.toLowerCase().repeat(pos))).join('-')

console.log(accum('ZpglnRxqenU'));