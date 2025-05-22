// Khai báo 1 mảng rỗng. Nhập vào số n (n > 0).
// Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.

let randomArr = [];
let n = 5; // for example

for (let i = 0; i < n; i++) { // điền n số
  randomArr.push(Math.floor(Math.random() * 100));
}
console.log(randomArr);