// let filePath = process.platform === "linux" ? 0 : "example.txt";
// let input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => el.trim());

// 전게임길이 = i(1) ~ input[i]+2

// 다음게임길이 = input[전게임길이+1] ~ j+input[j]+2

// 머리속 논리 : 인덱스가 1 부터 m+2 까지 돌고 난 다음 인덱스부터 또 m+2 까지 도는 것을 반복하고 싶은데 안된다..........
// for (let i = 0; i < Number(input[0]); i++) {
//   let j = 1;

//   for (let j = i + 1; j <= input[i + 1] + 2; j++) {
//     console.log(input[j]);
//   }
//   j = j;
// }

// 이삭님 코드 : 에러 뜬다고 함
// const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
// let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input[0]);
// let ans =""
// for (let i = 1; i < input.length; i++) {
//   if (input[i].length === 1) {
//     let M = Number(input[i]);
//     let sum = 0n;
//     let [k, d, a] = input[i + M + 1].split(" ").map(BigInt);
//     for (let j = 1; j <= M; j++) {
//       let [K, D, A] = input[i + j].split(" ").map(BigInt);
//       if (K * k + A * a - D * d > 0n ) sum += K * k + A * a - D * d;
//     }
//     ans += `${sum}\n`
//   }
// }
// console.log(ans);

// 이삭님 코드 수정 : 이것도 안됨
const filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
let ans = [];
for (let i = 1; i < input.length; i++) {
  if (input[i].length === 1) {
    //if (input[i].split(' ').length === 1) { --> 이렇게 수정해주면 정답
    let M = Number(input[i]);
    let sum = 0n;
    let [k, d, a] = input[i + M + 1].split(" ").map(BigInt);
    for (let j = 1; j <= M; j++) {
      let [K, D, A] = input[i + j].split(" ").map(BigInt);
      if (K * k + A * a - D * d > 0n) sum += K * k + A * a - D * d;
    }
    ans.push(sum);
  }
}
console.log(ans.join("\n"));
