const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const jay = inputData[0].length;
const doctor = inputData[1].length;

if (jay > doctor) {
  console.log("Yes");
} else {
  console.log("No");
}

//틀렸다
``;
