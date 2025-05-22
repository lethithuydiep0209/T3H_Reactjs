// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
let d1 = prompt("Nhập dãy d1 (cách nhau bởi dấu ,): ").split(',').map(Number);
let d2 = prompt("Nhập dãy d2 (cách nhau bởi dấu ,): ").split(',').map(Number);

// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let isD1allInD2 = d1.every(num => d2.includes(num));

// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let tongD1 = d1.reduce(
    (a, b) => a + b,
    0
);
let divBySumD1 = d2.some(number => number % tongD1 === 0);

// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
let evenNumbers = [...d1, ...d2].filter(num => num % 2 === 0);


// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1, d2
//  (Sử dụng core của thuật toán Merge Sort).

// Gộp 2 dãy, sắp xếp theo merge sort core
function MergeSorted_algorithm(arrA, arrB) {
  let result = [], i = 0, j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j])
      result.push(arrA[i++]);
    else result.push(arrB[j++]);
  }
  return result.concat(arrA.slice(i)).concat(arrB.slice(j));
}
let mergedSorted = MergeSorted_algorithm(d1, d2);
console.log(mergedSorted);