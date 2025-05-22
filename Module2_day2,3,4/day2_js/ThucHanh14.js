// Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// * * * *
// * * * *
// * * * *

let m = parseInt(prompt("Nhập chiều rộng m (>=2):"));
let n = parseInt(prompt("Nhập chiều cao n (>=2):"));
let row = "* ".repeat(m);
for (let i = 0; i < n; i++) {
  console.log(row);
}
