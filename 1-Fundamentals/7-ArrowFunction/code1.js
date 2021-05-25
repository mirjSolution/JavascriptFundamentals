// Traditional
function test() {}
test();

// Function expression
const test1 = function () {};

// Arrow function
const test2 = () => {};
const sum = (a) => {
  return a + b;
};
const sum1 = (a, b) => a + b;

// IIFE immediately invoke function expression
(function () {
  console.log('IIFE');
})();

// IIFE immediately invoke arrow expression
(() => {
  console.log('IIAF');
})();
