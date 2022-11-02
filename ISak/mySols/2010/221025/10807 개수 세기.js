const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let lis = input[1].split(" ").map(Number);
let v = Number(input[2]);

const vCount = (lis, v) => {
  let res = 0;
  for (let i = 0; i < lis.length; i++) {
    if (lis[i] === v) {
      res++;
    }
  }
  return res;
};
console.log(vCount(lis, v));
