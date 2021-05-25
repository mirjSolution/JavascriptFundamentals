// let obj = {
//   a: 10,
//   b: 20,
//   [Symbol.iterator]: function () {
//     return this;
//   },
//   next() {
//     if (obj.a < obj.b) {
//       return { value: obj.a++, done: false };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let i of obj) {
//   console.log(i);
// }

// let obj = {
//   start: 10,
//   end: 20,
// };

// obj[Symbol.iterator] = function () {
//   const itr = {
//     next() {
//       if (obj.start < obj.end) {
//         return { value: obj.start++, done: false };
//       } else {
//         return { done: true };
//       }
//     },
//   };
//   return itr;
// };

// for (let i of obj) {
//   console.log(i);
// }

// Or you can iterate again using next
// let itr = obj[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());

// let obj = {
//   a: 10,
//   b: 20,
// };

// for (let i in obj) {
//   console.log(`${i}: ${obj[i]}`);
// }
