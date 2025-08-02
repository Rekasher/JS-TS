'use strict';

// function basicOp(operation, value1, value2){
//     switch(operation){
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//     }
//     return 0;
// }


const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

