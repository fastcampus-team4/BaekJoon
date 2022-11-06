const { appendFile } = require("fs");

const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.pop();
let ans = [];
for (num of input) {
  let width = num.length + 1;
  for (x of num) {
    switch (x) {
      case "1":
        width += 2;
        break;
      case "0":
        width += 4;
        break;
      default:
        width += 3;
    }
  }
  ans.push(width);
}
console.log(ans.join("\n"));
