let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
if (input === "N" || input === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
