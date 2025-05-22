// 2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi
//  thành 1 mảng textsLength có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.

const texts = ["hello", "world", "JS"];

const textLength = texts.map(text => text.length);

console.log(textLength);