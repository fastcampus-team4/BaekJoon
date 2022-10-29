let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
console.log(Math.ceil(input / 5));
