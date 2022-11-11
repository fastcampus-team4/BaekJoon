const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day13/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [mingook, mansae] = inputData;
const min = Array.from(mingook.split(" "));
const man = Array.from(mansae.split(" "));

function score(score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += Number(score[i]);
  }
  return sum;
}

let S = score(man);
let T = score(min);

let answer = S >= T ? S : T;
console.log(answer);
