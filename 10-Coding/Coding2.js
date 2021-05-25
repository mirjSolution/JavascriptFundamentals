// Remove duplicate values from array

// 1. filter

let arr = ['a', 'a', 'b', 'A', 'A', 1, 2];

let uArr = arr.filter((v, i) => {
  console.log(v + '-' + arr.indexOf(v) + '-' + i);
  return arr.indexOf(v) === i;
});

console.log(uArr);

// 2. Set

let uArr1 = [...new Set(arr)];
console.log(uArr1);
