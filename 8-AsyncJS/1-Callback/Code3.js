// callback hell or pyramid of doom

function cSqr(n, cb) {
  setTimeout(() => {
    cb(n * n);
  }, 2000);
}

cSqr(2, function (res) {
  console.log(res);
  cSqr(res, function (res1) {
    console.log(res1);
    cSqr(res1, function (res2) {
      console.log(res2);
    });
  });
});
