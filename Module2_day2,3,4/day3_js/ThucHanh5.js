// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.

let arr = [5, 12, 3, 8, 9, 1];

let tongCacSoLe = arr.filter(num => num % 2 !== 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(tongCacSoLe);
console.log(5+3+9+1); // check