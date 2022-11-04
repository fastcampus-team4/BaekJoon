function solution(num) {
  let answer = "NO";
  let flag = 0;
  // flag는 값이 증가할 때 0이고, 감소할 때 1이 됩니다.
  // 최종적으로 1일 경우에만 YES를 반환하는데, 시작부터 작아지는 경우는 NO를 반환합니다.
  if (num[0] > num[1]) return answer;

  for (let i = 1; i < num.length; i++) {
    if (num[i] > num[i - 1]) {
      flag = 0;
    } else if (num[i] < num[i - 1]) {
      flag = 1;
    } else return answer; // 같은 값이 연속해 있으면 바로 NO를 반환합니다.
  }
  answer = flag === 1 ? "YES" : "NO";
  return answer;
}

console.log(solution([1, 2, 3, 2, 5, 3, 1])); // YES ↗️↘️
console.log(solution([1, 2, 5, 5, 6, 4, 3])); // NO →
console.log(solution([1, 3, 8, 5, 3, 9])); // NO ↗️↘️↗️
console.log(solution([1, 2, 3, 4, 5])); // NO ↗️
console.log(solution([5, 4, 3, 2, 1])); // NO ↘️
