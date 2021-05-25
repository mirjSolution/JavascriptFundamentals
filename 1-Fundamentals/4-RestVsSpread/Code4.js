let arr = [1, 5, 89, 5, 900, 234, 1456];
console.log(Math.max(...arr));

// using array.reduce to get sum
const sumReduce = arr.reduce((a, b) => a + b, 0);
console.log(sumReduce);

// Using function and for loop to get the sum
function sum() {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    count = count + arr[i];
  }
  return count;
}

console.log(sum());
