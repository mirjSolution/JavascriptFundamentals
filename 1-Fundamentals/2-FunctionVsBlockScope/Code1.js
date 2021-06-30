// Scope
function a() {
  var x = 10;
}
function b() {
  console.log(x);
}
a();
b();
// Ref err x is not defined
