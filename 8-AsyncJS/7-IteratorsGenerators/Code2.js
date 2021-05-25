let obj = {
  start: 10,
  end: 15,
  async *[Symbol.asyncIterator]() {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield cnt;
    }
  },
};

(async () => {
  for await (let i of obj) {
    console.log(i);
  }
})();

// let obj = {
//   a: 10,
//   b: 20,
// };

// obj[Symbol.asyncIterator] = async function* () {
//   for (let cnt = obj.a; cnt <= obj.b; cnt++) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     yield cnt;
//   }
// };

// (async () => {
//   for await (let i of obj) {
//     console.log(i);
//   }
// })();
