const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

while (true) {
  let num1 = Number(input[i].split("")[0]);
  let num2 = Number(input[i].split("")[1]);
  i++;
  if (num1 === 0 && num2 === 0) {
    break;
  } else if (num1 > num2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

//반복문을 돌리지 않아 틀림
