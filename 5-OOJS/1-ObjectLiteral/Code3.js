let pCode = 1001;
let pName = 'Apple';

let obj = {
  pCode, //Property Value Short hands
  pName, //Property Value Short hand

  getData() {
    console.log(obj.pCode, obj.pName);
  },
};
obj.getData();
