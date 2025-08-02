const findMissingLetter = array => {
    const findLetter = array.find((item, index, array) => array[index + 1].charCodeAt(0) - array[index].charCodeAt(0) !== 1)
    return String.fromCharCode(findLetter.charCodeAt(0) + 1)
}

console.log(findMissingLetter(['a','b','c','d','f'] ));