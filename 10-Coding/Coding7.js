// Array intersection and union
// Intersection - values which is present in both the arrays or which belongs to both the sets
// Union - union of two arrays that will not repeat if they have the same values

let arrOne = [1, 3, 5, 7, 8, 9, 2];
let arrTwo = [2, 4, 6, 8, 10];

// Intersection

let arrIntersection = arrOne.filter((v) => {
  return arrTwo.includes(v);
});
console.log(arrIntersection);

// Union

let arrUnion = [...new Set([...arrOne, ...arrTwo])];

console.log(
  arrUnion.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if ((a = b)) {
      return 0;
    }
  })
);
