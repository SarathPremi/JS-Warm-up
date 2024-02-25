function isEven(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return -1; // Return -1 for invalid input
  } else {
    return num % 2 === 0; // Return true if the number is even, false otherwise
  }
}
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));