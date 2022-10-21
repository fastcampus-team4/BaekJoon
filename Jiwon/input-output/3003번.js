const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : ".input.txt";
let inputData = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const black = [1, 1, 2, 2, 2, 8];
const result = black.map((ele, idx) => ele - inputData[idx]);
//jon() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다
console.log(result.join(" "));

/* const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").replace(/ /g, "").split("");

const king = parseInt(1 - inputData[0]);
const queen = parseInt(1 - inputData[1]);
const rook = parseInt(2 - inputData[2]);
const bishop = parseInt(2 - inputData[3]);
const knight = parseInt(2 - inputData[4]);
const pawn = parseInt(8 - inputData[5]);

console.log(`${king} ${queen} ${rook} ${bishop} ${knight} ${pawn}`); */
