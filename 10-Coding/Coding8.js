// Fibonacci is a series of numbers in which each number is the sum of two proceding numbers

function fibonacci(n) {
  let arr = [];
  let a = 0;
  let b = 1;
  let fn = a + b;
  arr.push(a);
  do {
    arr.push(fn);
    fn = a + b;
    a = b;
    b = fn;
  } while (fn <= n);
  console.log(arr);
}

fibonacci(233);
// 21 <= 144
// a = 89, b =144, fn = 233
