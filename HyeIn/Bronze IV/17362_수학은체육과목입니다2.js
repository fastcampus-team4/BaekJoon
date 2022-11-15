let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let n = parseInt(input);

let answer = n % 8;

console.log(answer == 0 ? 2 : answer == 6 ? 4 : answer == 7 ? 3 : answer);

/* 구글링 설명
손을 보면 8번 움직인 후 다시 처음부터 반복되는 걸로 알 수 있습니다.
즉, 입력받은 수를 8로 나눈 나머지로 해도 똑같은 결과가 나온다는걸 알 수 있습니다.
1 ~ 5 중 수를 선택해서 출력해야 하므로 입력 받은 수를 8로 나눈 나머지가 0, 7, 6인 경우 1 ~ 5 중 1가지 수를 출력해주고 아닌 경우 해당 수를 출력해주면 됩니다.
0인경우 8번을 누르므로 위 사진을 보면 2을 선택하면 된다는걸 알 수 있습니다.
이와 같은 방법으로 7 -> 3, 6 -> 4를 해주면됩니다.
=> 뭔말인지..?
*/
