function* gen() {
  let a = yield;
  console.log(a);
  a = yield;
  console.log(a);
}
const gObj = gen();
gObj.next();
gObj.next('A');
gObj.next('B');
