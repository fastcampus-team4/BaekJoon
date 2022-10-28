const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const X = Number(input[0]);
const N = Number(input[1]);

let sum = 0;

for (let i = 0; i < N; i++) {
  let items = input[i + 2].split(" ");

  let item = items[0];
  let price = items[1];

  sum += item * price;
}

if (sum === X) {
  console.log("Yes");
} else {
  console.log("No");
}
