function CountLegs(turkey, horse, pigs) {
  const turkeyLegs = turkey * 2;
  const horseLegs = horse * 4;
  const pigLegs = pigs * 4;
  return turkeyLegs + horseLegs + pigLegs;
}

console.log(CountLegs(2, 3, 5));
console.log(CountLegs(1, 2, 3));
console.log(CountLegs(5, 2, 8));