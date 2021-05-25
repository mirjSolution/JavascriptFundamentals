// What is prime number? - It is a number which is divisible by 2 numbers only by 1 and itself
function test(n) {
  if (n === 1) {
    console.log(`${n} is not a Prime Number`);
  } else if (n === 2) {
    console.log(`${n} is a Prime Number`);
  } else if (n % 2 != 0) {
    console.log(`${n} is a Prime Number`);
  } else {
    console.log(`${n} is not a Prime Number`);
  }
}
