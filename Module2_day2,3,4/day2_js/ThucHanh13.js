// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
// * * *
// * * *
// * * *

let n = parseInt(prompt("Nhập n (>=2):"));
let row = "* ".repeat(n);
for (let i = 0; i < n; i++) {
  console.log(row);
}

