const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day13/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = inputData;

const timeConvert = (time) => {
  let startT = 0;
  let endT = 0;
  for (let i = 0; i < time.length; i++) {
    if (i < 3) {
      if (i === 0) startT += time[i] * 60 * 60;
      if (i === 1) startT += time[i] * 60;
      if (i === 2) startT += time[i];
    }
    if (i >= 3) {
      if (i === 3) endT += time[i] * 60 * 60;
      if (i === 4) endT += time[i] * 60;
      if (i === 5) endT += time[i];
    }
  }
  let totalT = endT - startT;
  let totalH = parseInt((totalT / 3600) % 24);
  let totalM = parseInt((totalT / 60) % 60);
  let totalS = parseInt(totalT % 60);

  return [totalH, totalM, totalS];
};

console.log(...timeConvert(A.split(" ").map(Number)));
console.log(...timeConvert(B.split(" ").map(Number)));
console.log(...timeConvert(C.split(" ").map(Number)));
