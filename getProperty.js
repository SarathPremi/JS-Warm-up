var obj = {
  mykey: "value",
};

function getProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

console.log(getProperty(obj, "mykey"));
console.log(getProperty(obj, "dummykey"));