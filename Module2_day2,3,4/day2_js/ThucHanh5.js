// Nhập vào 3 số a, b, x (a < b).
// Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b (b > a):"));
let x = parseInt(prompt("Nhập x:"));
let found = false;
for (let i = a; i <= b; i++) {
  if (i % x === 0) {
    console.log(`Số nhỏ nhất chia hết cho ${x} là:`, i);
    found = true; // ✅
    break;
  }
}
if (!found) {
  console.log("Không có số nào chia hết trong khoảng.");
}
