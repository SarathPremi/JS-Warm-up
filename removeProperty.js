var obj = {
  mykey: "value",
};
function removeProperty(obj, key) {
  delete obj[key];
}
removeProperty(obj, "mykey");
if (obj.mykey === undefined) console.log("true");