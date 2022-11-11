const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

if (A + B >= C * 2) {
  console.log(A + B - C * 2);
} else {
  console.log(A + B);
}
