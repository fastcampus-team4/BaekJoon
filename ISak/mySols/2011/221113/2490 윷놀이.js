const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function calc(a, b, c, d) {
  // const sum = a+b+c+d;
  switch (a + b + c + d) {
    case 0:
      return "D";
    case 1:
      return "C";
    case 2:
      return "B";
    case 3:
      return "A";
    case 4:
      return "E";
  }
}
let ans = "";
for (x of input) {
  ans += `${calc(...x.split(" ").map(Number))}\n`;
}
console.log(ans);
