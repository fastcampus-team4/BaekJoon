const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let today = input[0];
let cars = input[1].split(" ");
let cnt = 0;

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === today) {
    cnt++;
  }
}
console.log(cnt);
