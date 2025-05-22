// Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử.
// Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.

let arr = [2, 4, 6, 8, 10];

while (arr.length > 1) {
  arr.pop(); // removes (pops) the last element of an array
}
console.log(arr); 