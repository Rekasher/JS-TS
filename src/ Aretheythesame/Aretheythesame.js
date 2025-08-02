const comp = (array1, array2) =>
  !!array1 && !!array2 &&
  array1.length === array2.length &&
  array1.every(el => {
    const i = array2.indexOf(el**2)
    if (~i) array2.splice(i,1);
    return ~i;
  });

console.log(comp( [121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))

function findNb(m) {
  let result = 0;
  let i = 1;

  while (m>=result) {
    if (result === m) return i-1;
    result = result + (i ** 3);
    i++;
  }

  return -1;
}

console.log(findNb(1071225))