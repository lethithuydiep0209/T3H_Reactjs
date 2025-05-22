// Nhập vào 2 số 0 <= x < y <= 100.
// Hãy tăng dần giá trị của x, giảm dần giá trị của y
// và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

let x = parseInt(prompt("Nhập x (0 <= x):"));
let y = parseInt(prompt("Nhập y (x < y <= 100):"));
while (x < y) {
  console.log(`x = ${x}, y = ${y}`);
  x++;
  y--;
}