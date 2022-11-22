const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day20/input.txt";
const [n, w, h, l] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = parseInt(w / l) * parseInt(h / l);
console.log(Math.min(answer, n));
