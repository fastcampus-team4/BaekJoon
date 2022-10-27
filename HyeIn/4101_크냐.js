let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

/* 구글링한 답안
let i = 0;

while (true) {
  let num1 = Number(input[i].split(" ")[0]);
  let num2 = Number(input[i].split(" ")[1]);

  i++;
  if (num1 === 0 && num2 === 0) {
    break;
  } else if (num1 > num2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
 */

// for 문으로 바꿔본 답안
for (let i = 0; i <= input.length; i++) {
  let num1 = Number(input[i].split(" ")[0]);
  let num2 = Number(input[i].split(" ")[1]);

  if (num1 === 0 && num2 === 0) {
    break;
  } else if (num1 > num2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

/* 
구글링 : 변수 i 를 0 으로 초기 설정, while 문을 ture 로 해준 뒤 각 배열을 공백으로 나눠주고 첫번째를 변수 num1 로 만들고 두번째를 변수 num2 로 만듦. 여기서 i 를 input 의 각 인덱스 숫자로 정하고 i 를 증감시켜준다. if 문으로 num1 과 num2 가 0 이면 break 로 멈추게 하고 다음 조건문으로 num 1이 num2 보다 크면 yes 를 출력, 아니면 no 출력
*/
