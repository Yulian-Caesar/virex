/*
const buttons = document.querySelectorAll(".myths__button-show");

for ( let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {
        buttons[i].classList.toggle("-minus");
        this.parentElement.classList.toggle("-open-answer");
    }

}*/

let mythsToggle = function () {
    $(this).parents(".myths__item-box").toggleClass("-open-answer");
    $(this).toggleClass("-minus");
};

$(document).on("click", ".myths__button-show", mythsToggle);