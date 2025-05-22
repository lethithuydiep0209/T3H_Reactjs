// 1. Khai báo 1 mảng gồm các số bất kỳ.
let nums = [15, 8, 27, 3, 6, 18, 23, 5, 7];

// -Tính tích của các phần tử trong mảng đó.
let tich = nums.reduce((acc, cur) => acc * cur, 1);

// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
let minDiv2 = Math.min(...nums.filter(num => num % 2 === 0));

// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
let maxDiv3 = Math.max(...nums.filter(num => num % 3 === 0));

// -Tính giá trị trung bình của mảng.
let avg = nums.reduce((acc, cur) => acc + cur, 0) / nums.length;


// -Lọc ra các số nguyên tố trong mảng.
function filterSoNguyenTo(n) {
  if (n<2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let soNguyenTo = nums.filter(filterSoNguyenTo);
console.log(soNguyenTo);


// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
let hasLessThan10 = nums.some(num => num < 10); // tests whether at least 1 element in the array passes the test

// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
let allGreaterThan20 = nums.every(num => num > 20);


// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
let n;
do {
  n = parseInt(prompt("Nhập số n:"));
} while (!nums.includes(n));

// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
function bubbleSort(arr) {
  let sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length-1; i++) {
    for (let j = 0; j < sortedArr.length -i -1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
}
let sortedNums = bubbleSort(nums);
console.log(sortedNums);
