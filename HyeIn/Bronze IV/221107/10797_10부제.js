let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let d = Number(input[0].trim());
let cars = input[1].split(" ").map(Number);
let cnt = 0;

for (car of cars) {
  if (car === d) cnt++;
}
console.log(cnt);
