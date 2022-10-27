const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

function cake_rev(a, c) {
  return [c[0] - a[2], c[1] / a[1], c[2] - a[0]];
}
a = input[0].split(" ").map(Number);
c = input[1].split(" ").map(Number);

ans = "";
cake_rev(a, c).forEach((v) => {
  ans += `${v} `;
});
console.log(ans);
