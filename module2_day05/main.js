document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fname').value.trim();
    const birthday = document.getElementById('birth').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!fullName && !birthday && !age && !gender && !phone) {
      alert('Vui lòng nhập ít nhất một thông tin!');
      // Reset về mặc định
      document.getElementById('label-fname').textContent = 'Full name:';
      document.getElementById('label-birth').textContent = 'Birthday:';
      document.getElementById('label-age').textContent = 'Age:';
      document.getElementById('label-gender').textContent = 'Gender:';
      document.getElementById('label-phone').textContent = 'Phone:';
      return;
    }

    // Cập nhật hiển thị giá trị nhập
    document.getElementById('label-fname').textContent = 'Full name: ' + fullName;
    document.getElementById('label-birth').textContent = 'Birthday: ' + birthday;
    document.getElementById('label-age').textContent = 'Age: ' + age;
    document.getElementById('label-gender').textContent = 'Gender: ' + gender;
    document.getElementById('label-phone').textContent = 'Phone: ' + phone;
  });
});
