const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day23/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);
const memory = ["a", "ptr"];
let star = "*";

console.log("init a;");
for (let i = 0; i < input; i++) {
  console.log(`int ${star}${memory[i + 1]} = &${memory[i]};`);
  star += "*";
  memory.push(`ptr${i + 2}`);
}
