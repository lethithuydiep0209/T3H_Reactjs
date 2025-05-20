let a = 5;
console.log("helloworld", a);
//if else
//else if
// neu thi hoac neu khong thi
let a1 = 8;
if (a >= 8) {
    console.log(" hoc sinh gioi");
} else if (a >= 6.5 && a <= 7) {
    console.log("hoc sinh kha");
} else if (a >= 4 && a <= 6.5) {
    console.log("hoc sinh trung binh")
} else {
    console.log("hoc sinh yeu")
}
//switch case ( tu dinh nghia moi truong hop co the roi vao)
// viết một hệ thống cho phép in ra màn hình số ngày trong năm 
//input: 2024-4
//output: 30 ngày


function soNgayTrongThang(nam, thang) {
    let soNgay;

    // Xac dinh so ngay theo thang
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
            // Kiem tra nam nhuan 
            // (chia het cho 4 va khong chia het cho 100,
            //  hoac chia het cho 400)
            if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
            break;
        default:
            console.log("Tháng không hợp lệ");
            return;
    }

    console.log(`Tháng ${thang} có ${soNgay} ngày`);
}

soNgayTrongThang(2024, 4);
soNgayTrongThang(2024, 5);
//Vòng lặp
//while do while for
//vong lap vo han k co diem dung va vong lap huu han

//while loop
let count = 0;
while (count < 10) {
    ++count;
    console.log(count);

};


// Bai nhap chuoi s
let s = prompt("Nhap chuoi s:");
if (s >= 8) {
    alert("Chuoi nayok");
} else {
    alert("Ngan qua, dai them ti nua");
}
//Nhap a, ktra theo dieu kien
let a2 = prompt("Nhap so a2:");
if (a2 >= 18) {
    console.log("Du 18 thi quay tiep")

} else if (a2 >= 16 && a2 < 18) {
    console.log("Doi them ti nua")
} else {
    console.log("Con qua na tre")
}
//tinh tong tu 1->50
let sum = 0
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("Tong tu -10 den 50 la:", sum)
//tinh so chan tu 1 -50
let sochan = 0
for (let i = -10; i <= 50; i++) {
    if (i % 2 === 0) {
        sochan += i;
    }
}
console.log("Tong so chan tu -10-> 50 la:", sochan);
// in so chia het cho 9 trong doan -100 -> 100
for (let i = -100; i <= 100; i++) {
    if (i % 9 === 0) {
        console.log("chia het cho 9", i);
    }
}

//dung while in ra day so tu 1 ->200
let i = 1
while (i < 200) {
    console.log(i);
    i++;
}

//nhap s va l, them a vao cuoi chuoi cho den khi du do dai
let s1 = prompt("nhap chuoi s:")
let l = prompt("nhap do dai l")
while (s.length < l) {
    s += 'a';
}
console.log("chuoi cuoi cung la:", s)

//nhap x, y va thay doi chung cho den khi x >= y
let x = prompt("Nhap x (0 <= x < y <= 100):");
let y = prompt("Nhap y (x < y <= 100):");
while (x < y) {
    console.log(`x = ${x}, y = ${y}`);
    x++;
    y--;
}
