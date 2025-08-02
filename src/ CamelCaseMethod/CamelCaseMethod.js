String.prototype.camelCase=function(){
    return this[0] ? this.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('') : '';
}

console.log("".toUpperCase().camelCase())