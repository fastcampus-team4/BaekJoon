let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));

while (true) {
  let answer = "";
  let mamber = input.shift();
  if (mamber[0] === "#") break;
  if (Number(mamber[1]) > 17 || Number(mamber[2]) >= 80) {
    answer += `${mamber[0]} Senior`;
  } else {
    answer += `${mamber[0]} Junior`;
  }
  console.log(answer);
}
