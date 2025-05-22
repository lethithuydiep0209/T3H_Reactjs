// Nhập vào 1 dãy số s, mỗi số cách nhau bởi dấu ‘,’.
//  Và 1 số n
//
// -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s.
// -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n.
// -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.

let s = "4,9,16,25,36";
let n = 20

let arr = s.split(',').map(Number); // chuyển thành 1 Array chứa Numbers


let mangBinhPhuong = arr.map(x => x * x); // In ra mảng các số đã bình phương lên
console.log(mangBinhPhuong);

let filteredNumbers = arr.filter(x => x >= n);
console.log(filteredNumbers);

let firstMatch = arr.find(x => x === n);
console.log(firstMatch);