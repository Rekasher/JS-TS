const Dates = {
  year: 60 * 60 * 24 * 365,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
  second: 1,
}

const formatDuration = seconds => {
  let textArr = [];

  const y = Math.floor(seconds / Dates.year);
  const d = Math.floor(seconds % Dates.year / Dates.day);
  const h = Math.floor(seconds % Dates.day / Dates.hour);
  const m = Math.floor( seconds % Dates.hour / Dates.minute);
  const s = seconds % Dates.minute;


  y > 0 ? y === 1 ? textArr.push(`${y} year`) : textArr.push(`${y} years`) : '';
  d > 0 ? d === 1 ? textArr.push(`${d} day`) : textArr.push(`${d} days`) : '';
  h > 0 ? h === 1 ? textArr.push(`${h} hour`) : textArr.push(`${h} hours`) : '';
  m > 0 ? m === 1 ? textArr.push(`${m} minute`) : textArr.push(`${m} minutes`) : '';
  s > 0 ? s === 1 ? textArr.push(`${s} second`) : textArr.push(`${s} seconds`) : '';

  switch (textArr.length) {
    case 1:
      return `${textArr[0]}`;
    case 2:
      return `${textArr[0]} and ${textArr[1]}`;
    case 3:
      return `${textArr[0]}, ${textArr[1]} and ${textArr[2]}`;
    case 4:
      return `${textArr[0]}, ${textArr[1]}, ${textArr[2]} and ${textArr[3]}`;
    case 5:
      return `${textArr[0]}, ${textArr[1]}, ${textArr[2]}, ${textArr[3]} and ${textArr[4]}`;
    default:
      return 'now';
  }
}

console.log(formatDuration(451));
