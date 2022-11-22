let filePath = process.platform === "linux" ? 0 : "example.txt";
let [k, d, a] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("/")
  .map(Number);
if (k + a < d || d === 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}
