const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
// 2진수를 입력받아 빅인트 10진수 x로 변환
let x = BigInt(`0b${input}`);

//17n 을 곱한뒤 2진수로 변환
console.log((x * 17n).toString(2));
