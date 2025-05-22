// Khai báo 1 mảng gồm 2 phần tử.
// Nhập vào số n (n > 2).
// Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đến khi độ dài của mảng bằng n.

let arr = [6, 8];
let n = 5; // for example

while (arr.length < n) {
  arr.unshift(0); // adds the specified elements to the beginning of 1 array
}
console.log(arr);