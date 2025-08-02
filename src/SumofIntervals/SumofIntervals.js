const sumIntervals = intervals => {
  if (!intervals || intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let total = 0;
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    if (currStart <= end) {
      end = Math.max(end, currEnd);
    } else {
      total += end - start;
      [start, end] = intervals[i];
    }
  }

  total += end - start;

  return total;
};

console.log(sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]))