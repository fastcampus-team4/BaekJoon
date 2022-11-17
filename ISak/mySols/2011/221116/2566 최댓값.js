const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let max = -1;
let maxI = 0;

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
  for (let j = 0; j < input[i].length; j++) {
    if (max < input[i][j]) {
      max = input[i][j];
      maxI = [i + 1, j + 1];
    }
  }
}
let ans = `${max}\n${maxI[0]} ${maxI[1]}`;
console.log(ans);
