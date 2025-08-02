const solution = list => {
  let res = '';
  for (let i = 0; i < list.length; i++) {
    let j = i;
    while (list[j] + 1 === list[j + 1]) j++;

    if (j - i >= 2) {
      res += `${list[i]}-${list[j]},`;
      i = j;
    } else {
      res += `${list[i]},`;
    }
  }
  return res.slice(0, -1);
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));