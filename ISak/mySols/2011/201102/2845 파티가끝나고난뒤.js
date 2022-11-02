const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let people = input[0]
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc * cur, 1);
const lis = input[1].split(" ").map(Number);

let ans = "";
lis.forEach((el) => (ans += `${el - people} `));
console.log(ans);
