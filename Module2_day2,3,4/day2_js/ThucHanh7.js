// Nhập vào số n. Hãy in ra số ước của n.

let n = parseInt(prompt("Nhập n:"));
console.log(`Các ước của ${n} là:`);
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
