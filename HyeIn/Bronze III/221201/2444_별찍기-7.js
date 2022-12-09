// https://www.acmicpc.net/problem/2444
// 출력: 다이아몬드..
// 공백 = 4 3 2 1 0 1 2 3 4, 별 = 1 3 5 7 9 7 5 3 1
// 트리, 역트리 공식 합침

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
let output = "";

for (let i = 1; i <= input; i++) {
  output += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
}

for (let i = input - 1; i > 0; i--) {
  output += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
}
console.log(output);
