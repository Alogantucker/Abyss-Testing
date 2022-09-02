//import * as fetch from "https://cdn.skypack.dev/fetch@1.1.0";
//const fetch = require("https://cdn.skypack.dev/fetch@1.1.0");


module.exports = async function fileCheck(link) {
  const response = await fetch(link, {method: "HEAD"});
  const size = response.headers.get("content-length");
console.log();
if (size < (1024*1024)) {
  console.log("Valid File Size");
  return true;
} else {
  console.log("Invalid File Size, will send as message instead");
  return false;
}

}
