let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString();

input = Number(input);
let num = input;
let i = 0;

while (true) {
  let sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  i++;
  if (input === num) break;
}
console.log(i);

/* 해설
주어진 수에서 십의 자리와 일의 자리수를 구해 더하고
새로운 수의 십의 자리는 주어진 수에서 일의 자리수(일의 자리에 10 곱해서 십의 자리 만들기)
새로운 수의 일의 자리는 주어진 수를 더한 값의 일의 자리
주어진 수가 새로운 수와 같을 때까지 반복
*/

// 내가 한거.. 안됨.. 당연함 주먹구구식으로 함..
// let ans = 0;
// let newNumSplit;
// let newNum = "";
// let plus;

// if (Number(input) < 10) {
// } else {
//   while (true) {
//     ans++;
//     newNumSplit = input.split("").map(Number);
//     plus = newNumSplit[0] + newNumSplit[1];
//     newNum = [newNumSplit[1], plus].join("");

//     if (input == newNum) break;
//   }
// }
// console.log(newNumSplit);

// // 구글링 두번째 방법
// // let origin = Number(input);
// // let count = 0;

// // while (true) {
// //   let sum = Math.floor(input / 10) + (input % 10);
// //   input = (input % 10) * 10 + (sum % 10);
// //   count++;
// //   if (origin === input) break;
// // }
// // console.log(count);
