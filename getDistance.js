function getDistance(x1, y1, x2, y2) {
  return parseInt(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}
console.log(getDistance(100, 100, 400, 300));
console.log(getDistance(1, 2, 4, 6));