// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
//
// ```jsx
// const storage = {
//     name: 'Fake Storage',
//     address: 'HN',
//     owner: 'Dung Tien',
//     items: [
//         {
//             id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
//         },
//         {
//             id: 2, name: 'Product 2', category: 'Device', pricce: 110
//         },
//         {
//             id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
//         },
//     ]
// }
//
// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

const storage = {
  name: 'Fake Storage',
  address: 'HN',
  owner: 'Dung Tien',
  items: [
    { id: 1, name: 'Product 1', category: 'Furniture', price: 20 },
    { id: 2, name: 'Product 2', category: 'Device', price: 110 },
    { id: 3, name: 'Product 3', category: 'Cloth', price: 2 },
  ]
};

// Hiển thị thông tin kho hàng
function showStorageInfo() {
  console.log(`Tên kho: ${storage.name}`);
  console.log(`Địa chỉ: ${storage.address}`);
  console.log(`Người sở hữu: ${storage.owner}`);

  console.log(`\n--- Danh sách mặt hàng ---`);
  if (storage.items.length === 0) {
    console.log("Không có mặt hàng nào trong kho.");
  } else {
    storage.items.forEach(item => {
      console.log(`ID: ${item.id}, Tên: ${item.name}, Loại: ${item.category}, Giá: ${item.price}`);
    });
  }
}

// Action 1. Sửa thông tin kho hàng
function updateStorageInfo() {
  const name = prompt("Nhập tên kho mới: ");
  const address = prompt("Nhập địa chỉ kho mới: ");
  const owner = prompt("Nhập người sở hữu mới: ");

  if(name && address && owner) {
    storage.name = name;
    storage.address = address;
    storage.owner = owner;

    alert("Cập nhật kho thành công!");
    showStorageInfo();
  }
  else {
    alert("Dữ liệu không hợp lệ. Đã hủy cập nhật.");
  }
}

// Action 2. Thêm mặt hàng
function createItem() {
  let id = parseInt(prompt("Nhập ID mặt hàng (số nguyên):"));
  while (storage.items.some(item => item.id === id)) {
    id = parseInt(prompt("ID đã tồn tại. Vui lòng nhập ID khác: "));
  }

  const name = prompt("Nhập tên mặt hàng: ");
  const category = prompt("Nhập loại mặt hàng: ");
  const price = parseFloat(prompt("Nhập giá mặt hàng: "));

  if (!isNaN(id) && name && category && !isNaN(price)) {
    storage.items.push({ id, name, category, price });
    alert("Thêm mặt hàng thành công!");
    showStorageInfo();
  }
  else {
    alert("Dữ liệu không hợp lệ. Hủy thao tác.");
  }
}

// Action 3. Tìm kiếm mặt hàng
function searchItem() {
  const keyword = prompt("Nhập từ khóa để tìm kiếm mặt hàng (để trống để xem tất cả):");
  let result;
  if (keyword) {
    result = storage.items.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  } else {
    result = storage.items;
  }

  if (result.length === 0) {
    alert("Không tìm thấy mặt hàng nào.");
  } else {
    let output = "Kết quả tìm kiếm:\n";

    result.forEach(item => {
      output += `ID: ${item.id}, Tên: ${item.name}, Loại: ${item.category}, Giá: ${item.price}\n`;
    });

    alert(output);
  }
}

// Action 4. Xóa mặt hàng
function deleteItem() {
  const id = parseInt(prompt("Nhập mã mặt hàng cần xóa:"));

  const index = storage.items.findIndex(item => item.id === id);
  if (index !== -1) {
    storage.items.splice(index, 1);
    alert("Xóa mặt hàng thành công!");
    showStorageInfo();
  }
  else {
    alert("Không tìm thấy mặt hàng với mã đã nhập. Kết thúc.");
  }
}

// Chạy chương trình chính
function run() {
  let running = true;
  while (running) {
    const action = prompt(
        `Nhập action (1-4):\n 1 - Sửa thông tin kho\n 2 - Tạo mặt hàng\n 3 - Tìm kiếm mặt hàng\n 4 - Xóa mặt hàng\n Nhấn Cancel để thoát`
    );
    if (action === null) {
      running = false;
      alert("Chương trình kết thúc.");
    }
    else {
      switch (action) {
        case '1': updateStorageInfo(); break;
        case '2': createItem(); break;
        case '3': searchItem(); break;
        case '4': deleteItem(); break;
        default: alert("Vui lòng nhập action hợp lệ (1-4)");
      }
    }
  }
}