// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ
//
// -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// -Tìm những chuỗi trong mảng có chứa giá trị text.khai báo 1 biến text
// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

let chuoiKyTu = ["hello", "textbook", "world", "texas", "te"];

let chuoiShortest = chuoiKyTu.reduce(
    (min, str) => str.length < min.length ? str : min,
    chuoiKyTu[0] // initial value
);
console.log(chuoiShortest);
