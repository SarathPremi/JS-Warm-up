function getNthElement(array, n) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[n];
  }
}
console.log(getNthElement([1, 3, 5], 1));
console.log(getNthElement([1, 3, 5], 2));
console.log(getNthElement([], 2));