function test() {
  let a = 1;
  function test1() {
    let b = 2;
    function test2() {
      console.log(a + b);
    }
    test2();
  }
  test1();
}

test();
