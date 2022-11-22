const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day20/input.txt";
const [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (m === 1 || m === 2) {
  console.log("NEWBIE!");
} else if (m <= n && (m !== 1 || m !== 2)) {
  console.log("OLDBIE!");
} else if (m > n && (m !== 1 || m !== 2)) {
  console.log("TLE!");
}
