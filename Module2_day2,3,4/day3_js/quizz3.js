// Khai báo 1 mảng gồm các số bất kỳ.
// -Hãy in ra các số chẵn trong mảng đó.
// -Hãy tính tổng các phần tử trong mảng.
// -Hãy tìm phần tử nhỏ nhất trong mảng.

let nums = [5, 8, 12, 20, 1, 3, 6];

let evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);

console.log(nums);
let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // phương thức tính kết quả tích lũy
console.log(sum);

let minValue = Math.min(...nums);
console.log(minValue);