// Nhập vào số n. Tính giai thừa của số n.

let n = parseInt(prompt("Nhập n:"));
let factorial = 1;
for (let i = 2; i <= n; i++) {
  factorial *= i;
}
console.log(`Giai thừa của ${n} là:`, factorial);
