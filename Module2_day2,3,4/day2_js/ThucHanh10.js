// Nhập vào 2 số m, n (m > 0, n > 0).
// Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

let m = parseInt(prompt("Nhập m (> 0):"));
let n = parseInt(prompt("Nhập n (> 0):"));

function UCLN(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function BCNN(a, b) {
  return (a * b) / UCLN(a, b);
}

console.log("Ước chung lớn nhất:", UCLN(m, n));
console.log("Bội chung nhỏ nhất:", BCNN(m, n));
