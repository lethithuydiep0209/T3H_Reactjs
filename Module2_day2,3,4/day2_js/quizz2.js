// Hãy viết chương trình nhập vào một số a.
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”.
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.

let a = parseInt(prompt("Nhập số a:"));
if (a >= 18) {
  console.log("Đủ 18 thì quẩy tiếp");
} else if (a >= 16) {
  console.log("Đợi thêm ít năm nữa");
} else {
  console.log("Còn quá nà trẻ");
}