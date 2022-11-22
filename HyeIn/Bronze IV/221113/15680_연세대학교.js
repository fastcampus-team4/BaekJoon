let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
if (Number(input) === 0) {
  console.log(`YONSEI`);
} else {
  console.log(`Leading the Way to the Future`);
}
