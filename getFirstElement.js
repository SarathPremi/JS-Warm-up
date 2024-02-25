function getFirstElement(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  } else {
    return arr[0]; // Return the first element of the array
  }
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));