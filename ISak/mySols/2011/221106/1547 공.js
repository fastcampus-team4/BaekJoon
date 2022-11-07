const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const swap = (i, j) => {
  if (cups[i] === 1 && cups[j] === 0) {
    cups[i] = 0;
    cups[j] = 1;
    cups[0] = j;
  } else if (cups[i] === 0 && cups[j] === 1) {
    cups[i] = 1;
    cups[j] = 0;
    cups[0] = i;
  }
};
let M = input[0];
let cups = [1, 1, 0, 0]; // 0인덱스에는 공이 있는 인덱스, 1~3 인덱스에는 공의유무

for (let k = 1; k <= M; k++) {
  let [i, j] = input[k].split(" ").map(Number);
  swap(i, j);
}
console.log(cups[0]);
