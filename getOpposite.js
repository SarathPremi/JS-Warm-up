function getOpposite(value) {
  if (Number.isInteger(value)) {
    return -value;
  } else {
    return -1;
  }
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));