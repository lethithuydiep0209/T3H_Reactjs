// 3. Khai báo 1 function với đầu vào là day, month, year.
//   Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.

function isValidNgayThangNam(ngay, thang, nam) {

  const date = new Date(ngay, thang - 1, nam);
  return date.getTime() === nam &&
      date.getTime() === thang - 1 &&
      date.getDate() === date;
}