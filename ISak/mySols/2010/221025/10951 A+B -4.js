const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

ans = "";

for (let i = 0; i < input.length; i++) {
  let a = input[i].split(" ")[0];
  let b = input[i].split(" ")[1];
  ans += `${Number(a) + Number(b)}\n`;
}
console.log(ans);
