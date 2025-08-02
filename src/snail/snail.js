'use strict';

const snail = (arr) => {
    let src = arr.map(a => a.slice());
    let result = [];
    let fase = 0;
    while (src.filter(a => a.length > 0).length > 0) {
        switch (fase++ % 4) {
            case 0:
                result = result.concat(src.splice(0, 1)[0]);
                break;
            case 1:
                result = result.concat(src.map(a => a.splice(-1)[0]));
                break;
            case 2:
                result = result.concat(src.splice(-1)[0].reverse());
                break;
            case 3:
                result = result.concat(src.map(a => a.splice(0, 1)[0]).reverse());
                break;
        }
    }
    return result;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));