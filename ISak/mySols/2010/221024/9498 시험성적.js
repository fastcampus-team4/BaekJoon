// https://www.acmicpc.net/submit/9498/
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();

let A = parseInt(input);

if (A >= 90 && A <= 100) {
  console.log("A");
} else if (80 <= A && A < 90) {
  console.log("B");
} else if (70 <= A && A < 80) {
  console.log("C");
} else if (60 <= A && A < 70) {
  console.log("D");
} else {
  console.log("F");
}
