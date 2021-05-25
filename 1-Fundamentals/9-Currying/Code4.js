const multiplication = (a) => (b) => (c) => a * b * c;
const product = multiplication(1)(2)(3);
console.log(product);

// const multiplication = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

// const num1 = multiplication(1);
// const num2 = num1(2);
// const num3 = num2(3);
// console.log(num3);
