function getLengthOfWord(word1) {
  if (typeof word1 === "string") {
    return word1.length;
  } else {
    return -1; // Return -1 for non-string inputs
  }
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));