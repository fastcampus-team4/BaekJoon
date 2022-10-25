const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const elt = input[i].split(" ").map(Number);
  console.log(elt[0] + elt[1]);
}
