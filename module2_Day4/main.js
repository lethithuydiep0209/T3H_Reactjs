const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: getRandomName(),
    age: getRandomInt(18, 32),
    math: getRandomFloat(0, 10),
    literature: getRandomFloat(0, 10),
    english: getRandomFloat(0, 10)
}));
function getRandomName() {
    const names = ["An", "Bình", "Chi", "Dũng", "Hà", "Huy", "Lan", "Minh", "Ngọc", "Phúc", "Quang", "Trang", "Tú", "Vân", "Yến"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
}

//1. Sắp xếp điểm toán tăng dần
const sortedByMathAsc = data
    .slice()
    .sort((a, b) => a.math - b.math);

console.log("1. Sắp xếp điểm toán tăng dần");
sortedByMathAsc.forEach((stu, idx) => {
    console.log(`${idx + 1}. ${stu.name} (ID:${stu.id}) — Toán: ${stu.math}`);
});

// 2. in ra màn hình người có điểm số cao nhất ( điểm tính bằng cách lấy TB của 3 môn toán, văn , anh )
data.forEach(stu => {
    stu.average = +((stu.math + stu.literature + stu.english) / 3).toFixed(2);

});

const topStudent = data.reduce((best, curr) =>
    curr.average > best.average ? curr : best
    , data[0]);

console.log("2. Học sinh có ĐTB cao nhất");
console.log(` ${topStudent.name} (ID:${topStudent.id})`);
console.log(`  Toán: ${topStudent.math}`);
console.log(` Văn: ${topStudent.literature}`);
console.log(` Anh: ${topStudent.english}`);
console.log(` Trung bình: ${topStudent.average}`);

//3. in ra màn hình thứ tự giảm dần của trung bình 3 môn
const sortedByAvgDesc = data
    .slice()
    .sort((a, b) => b.average - a.average);

// Gán xếp loại học lực cho mỗi học sinh
sortedByAvgDesc.forEach((stu, idx) => {
    if (stu.average >= 8) {
        stu.level = "Giỏi";
    } else if (stu.average >= 6.5) {
        stu.level = "Khá";
    } else if (stu.average >= 5) {
        stu.level = "Trung Bình";
    } else {
        stu.level = "Yếu";
    }

    console.log(`${idx + 1}. ${stu.name} (ID:${stu.id}) — TB: ${stu.average}, Xếp loại: ${stu.level}`);
});