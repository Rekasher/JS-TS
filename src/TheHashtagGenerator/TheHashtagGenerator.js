const generateHashtag = str => {
  const result = str.trim().length > 0 ?
    ['#', ...str.trim().split(/\s+/g).map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())].join('')
    :
    false;
  return result.length <= 140 ? result : false;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
