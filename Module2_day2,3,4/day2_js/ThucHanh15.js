// Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3
// *
// * *
// * * *

let n = parseInt(prompt("Nhập n (>=3):"));
for (let i = 1; i <= n; i++) {
  console.log("* ".repeat(i));
}
