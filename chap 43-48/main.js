function showAlert() {
    alert("Link was clicked!");
}

// Question 2

function showName(name) {
    alert("You clicked on " + name);
}

// Question 3

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
}

// Question 4

function changeImage(img) {
    img.src = "img/Iphone.webp";
}

function restoreImage(img) {
    img.src = "img/samsung.webp";
}
