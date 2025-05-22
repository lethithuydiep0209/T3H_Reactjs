// 4. Cho bộ dữ liệu về users như sau: data.js
//  -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
//  -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
//  -Đếm số lượng user có age > 50.
//  -Đếm số lượng user đã kết hôn và chưa kết hôn.
//  -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

// 1. Tìm user theo id
function findUserById(n) {
  return users.find(user => user.id === n) || "User not found";
}

// 2. Tìm email của user có tên chứa keyword (first_name + last_name)
function findUserEmailByKeyword(keyword) {
  const lowerKeyword = keyword.toLowerCase();

  return users
  .filter(user => (user.first_name + user.last_name).toLowerCase().includes(lowerKeyword)) // check xem có include không
  .map(user => user.email);
}

// 3. Đếm số user có tuổi > 50
function countUsersOver50() {
  return users.filter(user => user.age > 50).length;
}

// 4. Đếm số user đã kết hôn và chưa kết hôn
function countUsersByMaritalStatus() {
  let marriedUsers = 0, unMarriedUsers = 0;

  users.forEach(user => {
    if (user.is_married) marriedUsers ++;
    else unMarriedUsers ++;
  })
  return { marriedUsers, unMarriedUsers };
}

// 5. Đếm số lượng user theo từng ngành nghề
function countUserByJob() {
  const job_user_counts = {}
  users.forEach(user => {
    job_user_counts[user.job] = (job_user_counts[user.job] || 0) + 1;
  })
  return job_user_counts;
}
