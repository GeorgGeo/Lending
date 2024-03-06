
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuBackground = document.querySelector('.menu-background');

menuBtn.addEventListener('click', (e) => {
    menuList.classList.toggle('menu__list--open');
    menuBackground.classList.toggle('menu-background__open');
});

menuClose.addEventListener('click', (e) => {
    menuList.classList.remove('menu__list--open');
    menuBackground.classList.remove('menu-background__open');
});

//Animation for svg
document.querySelector('.my-svg-2').addEventListener('click', function() {
    // Используем querySelectorAll для выбора всех элементов с классом .vector
    document.querySelectorAll('.vector').forEach(function(path) {
        // Проверяем, есть ли уже анимация, и управляем ее состоянием
        let existingAnimation = path.querySelector('animate');
        if (existingAnimation) {
            // Если анимация уже существует, проверяем ее состояние
            if (existingAnimation.getAttribute('repeatCount') === 'indefinite') {
                // Если анимация бесконечная, останавливаем ее
                existingAnimation.setAttribute('repeatCount', '0');
            } else {
                // Если анимация остановлена, делаем ее бесконечной
                existingAnimation.setAttribute('repeatCount', 'indefinite');
                // Перезапускаем анимацию
                existingAnimation.beginElement();
            }
        } else {
            // Если анимации нет, создаем ее
            let animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animate.setAttribute('attributeName', 'stroke');
            animate.setAttribute('from', '#3F3D56');
            animate.setAttribute('to', '#4CAF50'); // Цвет, на который нужно изменить
            animate.setAttribute('dur', '2.5s'); // Продолжительность анимации
            animate.setAttribute('begin', 'indefinite'); // Начать анимацию немедленно
            animate.setAttribute('repeatCount', 'indefinite'); // Бесконечное повторение

            // Добавляем анимацию к элементу path
            path.appendChild(animate);

            // Запускаем анимацию
            animate.beginElement();
        }
    });
});

//
document.querySelectorAll('.my-svg').forEach(function(svg) {
    svg.addEventListener('click', function() {
        // Ищем все элементы path внутри текущего SVG
        svg.querySelectorAll('path').forEach(function(path) {
            // Проверяем, есть ли уже анимация, и управляем ее состоянием
            let existingAnimation = path.querySelector('animate');
            if (existingAnimation) {
                // Если анимация уже существует, проверяем ее состояние
                if (existingAnimation.getAttribute('repeatCount') === 'indefinite') {
                    // Если анимация бесконечная, останавливаем ее
                    existingAnimation.setAttribute('repeatCount', '0');
                } else {
                    // Если анимация остановлена, делаем ее бесконечной
                    existingAnimation.setAttribute('repeatCount', 'indefinite');
                    // Перезапускаем анимацию
                    existingAnimation.beginElement();
                }
            } else {
                // Если анимации нет, создаем ее
                let animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animate.setAttribute('attributeName', 'fill');
                animate.setAttribute('from', '#3F3D56');
                animate.setAttribute('to', '#4CAF50'); // Цвет, на который нужно изменить
                animate.setAttribute('dur', '2.5s'); // Продолжительность анимации
                animate.setAttribute('begin', 'indefinite'); // Начать анимацию немедленно
                animate.setAttribute('repeatCount', 'indefinite'); // Бесконечное повторение

                // Добавляем анимацию к элементу path
                path.appendChild(animate);

                // Запускаем анимацию
                animate.beginElement();
            }
        });
    });
});
//wow.js
(function () {
    new WOW().init();
})();
