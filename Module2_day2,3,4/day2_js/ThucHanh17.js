// Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.

let a = Math.floor(Math.random() * 6) + 5;
let n;

do {
  n = parseInt(prompt("Nhập số (5 - 10):"));
} while (n !== a);

console.log("Bạn đã đoán đúng!");
