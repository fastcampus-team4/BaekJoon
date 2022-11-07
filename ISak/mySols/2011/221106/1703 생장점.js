const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.pop();
let ans = "";
for (let i = 0; i < input.length; i++) {
  let tree = input[i].split(" ").map(Number);
  let a = tree[0];
  let leaves = 1;
  for (let j = 0; j < a; j++) {
    leaves = leaves * tree[1 + j * 2] - tree[2 + j * 2];
  }
  ans += `${leaves}\n`;
}
console.log(ans);
