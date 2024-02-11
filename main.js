// main.js

document.addEventListener('DOMContentLoaded', function() {
    const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');

    changeBackgroundBtn.addEventListener('click', function() {
        changeBackgroundColor();
    });

    function changeBackgroundColor() {
        const colors = ['#81c2c2', '#d9d2d2', '#7878a6', '#e1e15c', '#00ffff']; // Масив з різними кольорами
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Вибір випадкового кольору з масиву
        document.body.style.backgroundColor = randomColor; // Зміна кольору фону сторінки
    }
});
