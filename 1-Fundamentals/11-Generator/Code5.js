let obj = {
  start: 10,
  end: 20,
  [Symbol.iterator]: function* () {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};
for (let i of obj) {
  console.log(i);
}

// let obj = {
//   start: 10,
//   end: 20,
//   *[Symbol.iterator]() {
//     for (let cnt = this.start; cnt <= this.end; cnt++) {
//       yield cnt;
//     }
//   },
// };

// console.log([...obj]);

// const itr = obj[Symbol.iterator]();
// const value = itr.next();
// console.log(value.value);
// console.log(value.done);
