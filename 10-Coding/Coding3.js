// Remove false, null, undefined, 0, NaN, '', 6, 'Hi'
// using truthy and falsy
// falsy = false, null, undefined, 0, ''

let arr = [false, null, undefined, 0, NaN, '', 6, 'Hi'];

let nArr = arr.filter((v) => {
  return v;
});

console.log(nArr);

// Return falsy values in array

let nArr1 = arr.filter((v) => {
  return !v;
});
console.log(nArr1);
