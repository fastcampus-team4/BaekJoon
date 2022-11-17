function solution(nums) {
  let n = nums.length;
  let j;

  for (let i = 1; i < n; i++) {
    let tmp = nums[i];
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > tmp) nums[j + 1] = nums[j];
      else break;
    }
    nums[j + 1] = tmp; // j 다음자리에 3을 넣어라
  }
  return nums;
}

console.log(solution([5, 4, 2, 1, 3]));

/* 
[5,4,2,1,3]   4의 i=1  j=0
[4,5,2,1,3]   2의 i=2  j=1,0
[2,4,5,1,3]   1의 i=3  j=2,1,0
[1,2,4,4,5]   3의 i=4, j=3,2,1,0    , nums[i]=3 (temp=3)
[1,2,3,4,5]
*/
