// Функция для изменения фамилии
function changeLastName() {
    const newLastName = document.getElementById("newLastName").value;
    if (newLastName) {
        document.getElementById("lastName").textContent = newLastName;
    } else {
        alert("Введите фамилию!");
    }
}

// Функция для случайного фона
function changeBackground() {
    const colors = ["#000000", "#F11111", "#2F2222", "#33F333", "#444F44"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}