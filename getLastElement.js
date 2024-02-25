function getLastElement(array) {
  if (array.length === 0) {
    return -1;
  } else {
    return array[array.length - 1];
  }
}
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getLastElement([]));