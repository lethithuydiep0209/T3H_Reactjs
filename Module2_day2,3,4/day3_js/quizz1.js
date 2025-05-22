// Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’.
// Cho biết kiểu dữ liệu của 2 mảng đó?
// -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả?
// -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];

console.log(typeof arr1); // maybe object
console.log(typeof arr2);

const result = arr1 + arr2;
console.log(result); // '+' sẽ chuyển mảng thành chuỗi và nối chuỗi
console.log(arr1 === arr2); // maybe false → vì 2 mảng là 2 vùng nhớ khác nhau