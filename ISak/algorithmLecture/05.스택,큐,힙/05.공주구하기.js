function solution(N, K) {
  const queue = new Array(N).fill(1).map((el, i) => i + 1);
  while (queue.length > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.shift()); // 앞에껄 빼서 뒤에다 넣기
    }
    queue.shift(); // K 번째마다 버리기
  }

  return queue[0];
}
let [N, K] = [8, 3];
let output = solution(N, K);
console.log(output);
