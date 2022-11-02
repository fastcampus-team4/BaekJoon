const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let ans = "";
for (let i = 0; i < input.length; i++) {
  let a = input[i].split(" ")[0];
  let b = input[i].split(" ")[1];
  if (a === "0" && b === "0") {
    break;
  }
  ans += `${Number(a) + Number(b)}\n`;
}
console.log(ans);
