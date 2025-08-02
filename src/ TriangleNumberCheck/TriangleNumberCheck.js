'use strict';

const isTriangleNumber = ( n ) => Number.isInteger((8*n +1) ** .5);

console.log(isTriangleNumber( 10 ) );