// Is given value an array or not?

// toString.Call() is very useful when you have to deal with more detailed type of values

let arr = [1, 2, 3, 4, 5];

// console.log(typeof arr);

if (toString.call(arr) === '[Object Array]') {
  console.log(true);
} else {
  console.log(false);
}
