let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [h, m, s] = input[0].trim().split(" ").map(Number);
let d = parseInt(input[1]);

s += d % 60;
d = d / 60;
if (s >= 60) {
  s -= 60;
  m += 1;
}
m += d % 60;
d = d / 60;
if (m >= 60) {
  m -= 60;
  h += 1;
}
h += d % 24;
if (h >= 24) {
  h -= 24;
}

console.log(parseInt(h), parseInt(m), parseInt(s));
