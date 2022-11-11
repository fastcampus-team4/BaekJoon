const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function sol() {
  const n = input.length;
  if (n === 4) return 20;
  if (n === 2) {
    const [x, y] = input.split("").map(Number);
    return x + y;
  }

  const [a, b, c] = input.split("").map(Number);

  if (input[1] === "0") {
    return c + 10;
  } else if (input[2] === "0") {
    return a + 10;
  }
}

console.log(sol());
