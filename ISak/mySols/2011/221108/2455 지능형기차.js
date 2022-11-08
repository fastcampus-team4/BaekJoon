const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let ans = 0;
let total = 0;
for (x of input) {
  let [out, into] = x.split(" ").map(Number);
  total += into - out;
  if (total > ans) {
    ans = total;
  }
}
console.log(ans);
