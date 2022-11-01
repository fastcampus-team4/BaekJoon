let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString();
let score = parseInt(input);

if (score <= 100 && score >= 90) {
  console.log("A");
} else if (score <= 89 && score >= 80) {
  console.log("B");
} else if (score <= 79 && score >= 70) {
  console.log("C");
} else if (score <= 69 && score >= 60) {
  console.log("D");
} else if (score <= 59 && score >= 0) {
  console.log("F");
}

// 좀 더 짧게 할 방법을 찾아볼 것
