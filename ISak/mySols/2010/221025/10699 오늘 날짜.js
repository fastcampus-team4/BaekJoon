const date = new Date();

const y = date.getFullYear();
// 문자열.padStart(2, '0') 은 2칸을 출력할때 앞의 빈자리는0으로 채움
const m = `${date.getMonth() + 1}`.padStart(2, "0");
const d = `${date.getDate()}`.padStart(2, "0");

console.log(`${y}-${m}-${d}`);
