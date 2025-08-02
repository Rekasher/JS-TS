const nbYear = (p0, percent, aug, p) => {
  const years = 0;
  const endYearPopulation = Math.floor(p0*(1 + percent/100) + aug);
  return endYearPopulation >= p ?  years + 1 : nbYear(endYearPopulation, percent, aug, p) + 1;
}


console.log(nbYear(1500, 5, 100, 5000));