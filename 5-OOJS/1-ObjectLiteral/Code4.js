let obj = { a: 'First' };
let obj1 = Object.assign({}, obj);
obj1.a = 'Second';
console.log(obj.a);
