function* gen() {
  yield 'One';
  yield 'Two';
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.return('End'));
console.log(gObj.next());
