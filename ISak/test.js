const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();
inputData;
let number = Number(inputData);

for (let i = number; i >= 1; i--) {
  console.log("*".repeat(i));
}
