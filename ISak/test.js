let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
  arr[i]; //?
  arr[i] = new Array(3).fill(0);
}

arr[0][1] = 3;
arr[4][2] = 4;
arr;
