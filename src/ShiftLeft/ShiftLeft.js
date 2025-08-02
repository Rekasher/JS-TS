const isArrEqual = (a, b) => a.every((_, index, a) => a[index] === b[index]);

const shiftLeft = (s, t) => {
  let count = 0;
  const sArr = s.split('');
  const tArr = t.split('');

  while(!isArrEqual(sArr, tArr)){
    if(isArrEqual(sArr, tArr)){
      return count;
    }
    sArr.shift();
    count++;

    if(isArrEqual(sArr, tArr)){
      return count;
    }

    tArr.shift();
    count++;

  }
  return count;
}

console.log(shiftLeft('test', 'yes'))