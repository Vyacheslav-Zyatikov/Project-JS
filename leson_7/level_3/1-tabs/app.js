'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let paragraph = document.querySelector('.text');
let navs = document.querySelectorAll('.nav-link');
navs.forEach(function(nav){
    nav.addEventListener('click', clickHandler);
})
/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeActiveClass(event.target);
    changeText(event.target);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} target
 */
function changeActiveClass(target) {
    navs.forEach(function(nav){
        if (nav.classList.contains('active')){
            nav.classList.remove('active');
        }
    })
    target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} target
 */
function changeText(target) {
    switch (target.textContent) {
        case 'Link 1':
            paragraph.innerHTML = texts.text1;
            break;
        case 'Link 2':
            paragraph.innerHTML = texts.text2;
            break;
        case 'Link 3':
            paragraph.innerHTML = texts.text3;
            break;
    }
}