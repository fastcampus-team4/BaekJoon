const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input.shift().split(" ").map(Number);

function count(r, c) {
  let ansB = 0;
  let ansW = 0;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        if (input[r + i][c + j] !== "B") {
          ansB++;
        } else {
          ansW++;
        }
      }
      if ((i + j) % 2 === 1) {
        if (input[r + i][c + j] !== "W") {
          ansB++;
        } else {
          ansW++;
        }
      }
    }
  }
  return Math.min(ansB, ansW);
}

function sol() {
  ans = [];
  for (let i = 0; i < N - 8 + 1; i++) {
    for (let j = 0; j < M - 8 + 1; j++) {
      ans.push(count(i, j));
    }
  }
  console.log(Math.min(...ans));
}

sol();
