// 2. Khai báo 1 function với đầu vào là 3 số a, b, c.
//   Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không.
//   Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}