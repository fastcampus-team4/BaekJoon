// https://www.acmicpc.net/problem/2441
// 출력 : 역삼각형

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
let ansArr = [];
let j = 5;

for (let i = 0; i < input; i++) {
  let ans = "";
  ans += " ".repeat(i);

  if (j > 0) {
    ans += "*".repeat(j);
    j--;
  }

  ansArr.push(ans);
}

console.log(ansArr.join("\n"));
// 이건 왜 안되지?

// 구글링
// let result = "";

// for (let i = 0; i < input; i++) {
//   let space = "";
//   space += " ".repeat(i);

//   for (let j = input - i; j > input - i - 1; j--) {
//     let star = "";
//     star += "*".repeat(j);
//     result += space + star + "\n";
//   }
// }

// console.log(result);
