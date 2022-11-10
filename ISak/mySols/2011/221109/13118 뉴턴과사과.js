const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const people = input[0].split(" ").map(Number);
const [x, y, r] = input[1].split(" ").map(Number);

function sol() {
  for (i = 0; i < people.length; i++) {
    if (people[i] === x) {
      return i + 1;
    }
  }
  return 0;
}
console.log(sol());
