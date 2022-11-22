let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();
let a = parseInt(input);

if (a % 4 === 0 && a % 100 !== 0) {
  console.log(1);
} else if (a % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
