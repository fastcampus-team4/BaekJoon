const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line.toString();
}).on("close", function () {
  let obj = {
    "A+": 4.3,
    A0: (4.0).toFixed(1),
    "A-": 3.7,
    "B+": 3.3,
    B0: (3.0).toFixed(1),
    "B-": 2.7,
    "C+": 2.3,
    C0: (2.0).toFixed(1),
    "C-": 1.7,
    "D+": 1.3,
    D0: (1.0).toFixed(1),
    "D-": 0.7,
    F: (0.0).toFixed(1),
  };

  console.log(obj[input]);
  process.exit();
});

/* 
객체에 해당하는 데이터를 넣고 소수점까지 나오게 하기 위해 toFixed 메소드로 자리수까지 지정해줘야 정확하게 나옴
그리고 console.log 로 input 에 맞는 obj 를 찾도록 출력
*/

/* 실패 : 구글링해서 나온 코드를 fs 모듈에 적용해본 것
설명 : obj 키값에 모두 따옴표를 줘봐도 틀렸다고 나오고 아예 따옴표를 안줬더니 런타임 에러가 나온다 readline 으로 해야 하는 것 같다


let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString();

let obj = {
  "A+": 4.3,
  A0: (4.0).toFixed(1),
  "A-": 3.7,
  "B+": 3.3,
  B0: (3.0).toFixed(1),
  "B-": 2.7,
  "C+": 2.3,
  C0: (2.0).toFixed(1),
  "C-": 1.7,
  "D+": 1.3,
  D0: (1.0).toFixed(1),
  "D-": 0.7,
  F: (0.0).toFixed(1),
};
console.log(obj[input]); 

*/

/* 혹시나 하고 쳐본 코드..^^
if (input == "A+") {
  console.log(4.3);
} else if (input == "A0") {
  console.log(4.0);
} else if (input == "A-") {
  console.log(3.7);
} else if (input == "B+") {
  console.log(3.3);
} else if (input == "B0") {
  console.log(3.0);
} else if (input == "B-") {
  console.log(2.7);
} else if (input == "C+") {
  console.log(2.3);
} else if (input == "C0") {
  console.log(2.0);
} else if (input == "C-") {
  console.log(1.7);
} else if (input == "D+") {
  console.log(1.3);
} else if (input == "D0") {
  console.log(1.0);
} else if (input == "D-") {
  console.log(0.7);
} else if (input == "F") {
  console.log(0.0);
} 
*/
