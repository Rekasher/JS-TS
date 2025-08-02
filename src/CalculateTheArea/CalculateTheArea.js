const areaOfPolygonInsideCircle = (circleRadius, numberOfSides) =>
  +((1/2) * numberOfSides * circleRadius**2 * Math.sin(2 * Math.PI / numberOfSides)).toFixed(3);

console.log(areaOfPolygonInsideCircle(3, 3) )