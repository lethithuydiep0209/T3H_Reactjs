// Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.

let n = parseInt(prompt("Nhập n (2 - 10):"));
if (n >= 2 && n <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
} else {
  console.log("n không hợp lệ");
}
