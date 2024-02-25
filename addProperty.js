var obj = {};
function addProperty(obj, key) {
  obj[key] = true;
  console.log(obj); 
}
addProperty(obj, "mykey");