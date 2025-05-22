// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý, năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.

let growth = [
  [5, 8, 9, 16],
  [2, 7, 1, 9],
  [5, 6, 8, 12],
  [10, 2, 1, 8],
  [20, 4, 9, 1]
];

// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (theo hàng).
let avgYearGrowth = growth.map(row => {
  let sum = row.reduce((a, b) => a + b, 0);
  return sum / row.length;
});
console.log(avgYearGrowth);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
let maxAvgYearGrowth = Math.max(... avgYearGrowth);


// -Tính giá trị tăng trưởng trung bình theo quý của các năm (theo cột)
let avgQuarterGrowth = growth[0].map((_, colIndex) => { // bỏ qua giá trị, chỉ lấy index

  let sum = growth.map(row => row[colIndex])
    .reduce((a, b) => a + b, 0);

  return sum / growth.length;
});
console.log(avgQuarterGrowth);

// -Tìm giá trị tăng trưởng  trung bình theo quý lớn nhất.
let maxQuarterGrowth = Math.max(...avgQuarterGrowth);
