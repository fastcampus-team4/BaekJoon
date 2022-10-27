const filePath = process.platform === "linus" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let brokenBtn = input[2].split(" ");

for (let i = 0; i < 10; i++) {
  if (brokenBtn.includes(`${i})`)) {
    console.log(i);
  }
}
