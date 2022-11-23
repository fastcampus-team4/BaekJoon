const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day21/input.txt";
const [k, d, a] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("/")
  .map(Number);

if (k + a < d || d === 0) console.log("hasu");
else console.log("gosu");
