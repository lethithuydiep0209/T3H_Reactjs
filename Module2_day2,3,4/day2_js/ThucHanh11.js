// Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

let correct = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let guessedCorrectly = false;

while (attempts < 5) {
  let answer = parseInt(prompt("Đoán số (1-20):"));
  attempts++;
  if (answer === correct) {
    console.log("Đoán đúng");
    guessedCorrectly = true;
    break;
  } else {
    console.log("Đoán sai");
  }
}

if (!guessedCorrectly) {
  console.log("Bạn đã thua cuộc. Đáp án là:", correct);
}
