let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
let answer1 = input - input * (22 / 100);
let answer2 = input - ((input - input * (80 / 100)) * 22) / 100;
console.log(`${answer1} ${answer2}`);
