let tV = 'pCode';
let obj = {
  [tV]: 1001,
  pName: 'Apple',
  ['get' + 'Data']() {
    console.log(obj.pCode, obj.pName);
  },
};
