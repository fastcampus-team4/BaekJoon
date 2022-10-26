const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs").readFileSync(filePath).toString().split("");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

console.log((A + B) % C);
console.log((A % C) + ((B % C) % C));
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

//node에 찍어보면 답은 나오는데 틀렸대
