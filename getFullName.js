function getFullName(firstName, lastName) {
  if (firstName && lastName) {
    return firstName + " " + lastName;
  } else if (firstName) {
    return firstName;
  } else if (lastName) {
    return lastName;
  } else {
    return "";
  }
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI"));
console.log(getFullName("GEEK"));
console.log(getFullName("", ""));