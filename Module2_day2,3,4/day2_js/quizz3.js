// Hãy tính tổng các số chẵn từ -10 đến 50.

let tongCacSoChan = 0;
for (let i = -10; i <= 50; i++) {
  if (i % 2 === 0) {
    tongCacSoChan += i;
  }
}
console.log("Tổng các số chẵn từ -10 đến 50 là:", tongCacSoChan);
