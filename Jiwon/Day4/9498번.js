const filePath = process.platform === "linux" ? 0 : "./input.txt";
const inputData = require("fs").readFileSync(filePath).toString().split("\n");

const score = parseInt(inputData);

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (80 <= score && score < 90) {
  console.log("B");
} else if (70 <= score && score < 80) {
  console.log("C");
} else if (60 <= score && score < 70) {
  console.log("D");
} else {
  console.log("F");
}
