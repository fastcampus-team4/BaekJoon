const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const seq = input[1].split(" ").map(Number);

let ans = "";

for (let i = 0; i < N; i++) {
  let temp = seq[i];

  if (temp < X) {
    ans += `${temp} `;
  }
}

console.log(ans);
