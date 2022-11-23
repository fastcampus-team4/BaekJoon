const { arrayBuffer } = require("stream/consumers");

const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day21/input.txt";
const [h, w, n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = Math.ceil(w / (m + 1));
const b = Math.ceil(h / (n + 1));
console.log(a * b);
