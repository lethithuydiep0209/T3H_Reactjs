// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
function inputPositiveNumber() {
  let a;
  do {
    a = parseFloat(prompt("Nhập một số lớn hơn 0:"));
  } while (isNaN(a) || a <= 0);

  return a;
}
