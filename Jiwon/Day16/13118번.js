const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day16/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const people = inputData[0].split(" ").map(Number);
const apple = inputData[1].split(" ").map(Number)[0];

function answer() {
  for (i = 0; i < people.length; i++) {
    if (people[i] === apple) {
      return i + 1;
    }
  }
  return 0;
}

console.log(answer());
