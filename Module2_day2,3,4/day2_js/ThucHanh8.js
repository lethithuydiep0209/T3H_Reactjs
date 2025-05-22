// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.

let n = parseInt(prompt("Nhập số n:"));
let isPrime = n >= 2;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${n} ${isPrime ? "là" : "không là"} số nguyên tố`);
