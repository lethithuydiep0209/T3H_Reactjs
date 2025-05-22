// Nhập vào chuỗi s (chỉ gồm chữ số) và số l.
// Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

let s = prompt("Nhập chuỗi s (chỉ gồm chữ số):");
let l = parseInt(prompt("Nhập độ dài tối thiểu l:"));
while (s.length < l) {
  s = '0' + s;
}
console.log("Chuỗi sau khi thêm:", s);
