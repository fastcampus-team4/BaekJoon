const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");
let [N, M] = input;

if (N === M) {
  console.log(1);
} else {
  console.log(0);
}
