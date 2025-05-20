function changeItems() {

    var item1 = document.getElementsByClassName("favorite-list-item")[0];
    var item2 = document.getElementsByClassName("favorite-list-item")[1];
    var item3 = document.getElementsByClassName("favorite-list-item")[2];

    item1.innerHTML = "I love this thing";
    item1.style.color = "red";

    item2.innerHTML = "I love this thing";
    item2.style.color = "red";

    item3.innerHTML = "I love this thing";
    item3.style.color = "red";
}

function addItem() {
    var text = document.getElementById("input-text").value;
    var newItem = document.createElement("li"); // Tạo một phần tử li mới
    newItem.classList.add("favorite-list-item"); // Thêm lớp cho phần tử mới
    newItem.textContent = text; // Đặt nội dung của phần tử mới là giá trị nhập vào
    document.getElementById("favorite-list").appendChild(newItem); // Thêm phần tử mới vào danh sách
}



