products = [1,2,3,4,5]
result = products.some((item) => item>1);
console.log(result);
result = products.some((item) => {
  return item>1
});
console.log(result);