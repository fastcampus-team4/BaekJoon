const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const countCh = (s, ch) => {
  cnt = 0;
  for (x of s) {
    if (ch === x) {
      cnt++;
    }
  }
  return cnt;
};

let ans = "";
for (let i = 97; i <= 122; i++) {
  ch = String.fromCharCode(i);
  ans += `${countCh(input, ch)} `;
}
console.log(ans);
