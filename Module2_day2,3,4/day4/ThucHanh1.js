// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a != 0).
//   Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0
//   và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

function giaiPTbac2(a, b, c) {

  if (a === 0) throw new Error("a phải khác 0");
  const delta = b*b - 4*a*c;

  if (delta < 0) {
    return [];
  }
  else if (delta == 0) {
    const x = -b / (2*a);
    return [x]; // nghiệm kép của x
  }
  else {
    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b + sqrtDelta) / (2*a);
    const x2 = (-b - sqrtDelta) / (2*a);
    return [x1, x2]; // 2 nghiệm phân biệt
  }
}
