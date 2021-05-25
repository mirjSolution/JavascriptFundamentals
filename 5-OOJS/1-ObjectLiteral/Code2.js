const proto = Object.defineProperty({}, 'prop', {
  writable: true, //****making this true, will allow to change the property. Otherwise it is readonly at this time
  value: 1230,
});
const obj = Object.create(proto);
obj.prop = 456;
console.log(obj.prop);
