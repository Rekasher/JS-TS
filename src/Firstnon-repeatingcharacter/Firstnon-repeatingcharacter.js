const firstNonRepeatingLetter = s => {
  const lower = s.toLowerCase().split('');
  const index = lower.findIndex((char, i, arr) =>
    arr.indexOf(char) === arr.lastIndexOf(char)
  );
  return index !== -1 ? s[index] : '';
};


console.log(firstNonRepeatingLetter('STress'))