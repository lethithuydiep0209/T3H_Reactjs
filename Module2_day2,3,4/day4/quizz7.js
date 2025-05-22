// 1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.
function repeatSlogan(slogan) {
  let counter = 1;

  setInterval(() => {
    console.log(`${slogan} - ${counter++}`);
  },5000);
}