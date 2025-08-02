const permuteAPalindrome = input => {
  const counts = {};

  for (const char of input) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let oddCount = 0;

  for (const count of Object.values(counts)) {
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= 1;
};

console.log(permuteAPalindrome('madam'));
// console.log(permuteAPalindrome('adamm'));
// console.log(permuteAPalindrome('junk'));