// Factorial

function test(a) {
  factorial = 1;
  for (; a >= 1; a--) {
    factorial = factorial * a;
  }
  return factorial;
}

console.log(test(5));
