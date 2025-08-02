function humanReadable (seconds) {
  if (seconds > 359999) return 'not valid';
  const HH = (Math.floor(seconds / 3600)).toString().padStart(2, '0');
  const MM = (Math.floor(seconds % 3600 / 60)).toString().padStart(2, '0');
  const SS = (seconds % 60).toString().padStart(2, '0');
  return `${HH}:${MM}:${SS}`
}


console.log(humanReadable(359999 ));
