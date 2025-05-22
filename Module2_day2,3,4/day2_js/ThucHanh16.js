// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”

let w = parseFloat(prompt("Nhập cân nặng (kg):"));
let h = parseFloat(prompt("Nhập chiều cao (m):"));
let bmi = w / (h * h);
console.log("BMI =", bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("Nhẹ cân");
} else if (bmi < 23) {
  console.log("Bình thường");
} else if (bmi < 25) {
  console.log("Thừa cân");
} else {
  console.log("Béo phì");
}
