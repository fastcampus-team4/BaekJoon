const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.pop(); // 마지막 0 0 제거

let ans = "";

input.forEach((el) => {
  let x = el.split(" ").map(Number);
  ans += `${x[0] + x[1]}\n`;
});
console.log(ans);
