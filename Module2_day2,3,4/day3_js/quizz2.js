// Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// -In ra phần tử có chỉ số 0 và 3 trong mảng.
// -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.

let nums = [5, 8, 12, 20];

console.log(nums[0]);
console.log(nums[3]);

let sum = nums[1] + nums[2];
console.log(sum);

let temp = nums[1];
nums[1] = nums[3];
nums[3] = temp

console.log(nums); // [5, 20, 12, 8]
