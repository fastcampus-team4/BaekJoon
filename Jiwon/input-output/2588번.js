const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const B0 = B % 10;
//Math.floor() 소수점 이하 버림
const B1 = Math.floor((B % 100) / 10);
const B2 = Math.floor(B / 100);

console.log(A * B0);
console.log(A * B1);
console.log(A * B2);
console.log(A * B);

/*
const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim.split("\n");

const [B0, B1, B2] = B.split("");
const three = A * B2;
const four = A * B1;
const five = A * B0;
const sum = A*B;
const sum = three + Number(`${four}0`) + Number(`${five}00`);

console.log(three);
console.log(four);
console.log(five);
console.log(sum); */

/* 콘솔에 각각 찍을 때는 나오는데 왜 한 번에 찍으면 안 나올까
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(`${inputData[0]}${inputData[1]}${inputData[2]}`);
const B0 = parseInt(A * inputData[5]);
const B1 = parseInt(A * inputData[4]);
const B2 = parseInt(A * inputData[3]);

console.log(B0);
console.log(B1);
console.log(B2);
console.log(B0 + B1 * 10 + B2 * 100); */
