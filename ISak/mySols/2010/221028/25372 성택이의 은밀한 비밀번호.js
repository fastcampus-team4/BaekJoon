const filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(input.shift());

input.forEach((item) => {
  let l = item.trim().length;
  if (l >= 6 && l <= 9) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
