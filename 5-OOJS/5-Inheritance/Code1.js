class Child extends String {
  noc(str) {
    console.log(str.length);
  }
}
const obj = new Child1('Test string');
console.log(obj.toLowerCase());
obj.noc('another string');
