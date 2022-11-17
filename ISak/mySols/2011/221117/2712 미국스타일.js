const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function converse([num, unit]) {
  num = Number(num);
  switch (unit) {
    case "kg":
      return [num * 2.2046, "lb"];
    case "lb":
      return [num * 0.4536, "kg"];
    case "l":
      return [num * 0.2642, "g"];
    case "g":
      return [num * 3.7854, "l"];
  }
}
const T = Number(input[0]);
let ans = "";
for (let i = 1; i <= T; i++) {
  let [num, unit] = input[i].split(" ");
  let res = converse([num, unit]);
  ans += `${res[0].toFixed(4)} ${res[1]}\n`;
}
console.log(ans);
