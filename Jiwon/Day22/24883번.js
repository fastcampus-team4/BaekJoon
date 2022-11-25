const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day22/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

if (inputData === "N" || inputData === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
