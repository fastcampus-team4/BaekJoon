const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
// console.log(input);
const students = []; // 1~30번 학생 배열 만들기
for (i = 1; i <= 30; i++) {
  students.push(i);
}
const res = [];
// console.log(students);
students.forEach((student) => {
  // 학생들 중 제출 안한 학생 정답배열에 넣기
  if (!input.includes(student)) {
    res.push(student);
  }
});
console.log(res.join('\n'));
