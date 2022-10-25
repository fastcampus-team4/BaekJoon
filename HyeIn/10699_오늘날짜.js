const date = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");

const answer = date.split(" ")[0];
console.log(answer);

/* 
const date = new Date() -> 2022-10-25T04:45:53.137Z
T 빈 문자열로 만들고, . 뒤에 있는 것들을 다 지움
2022-10-25 04:50:20 -> 이 상태에서 공백을 기준으로 나누고 첫번째 것만 출력
*/
