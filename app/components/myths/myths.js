let mythsToggle = function () {
    $(this).toggleClass("-open-answer");
    $(this).children(".myths__button-show").toggleClass("-minus");
};

$(document).on("click", ".myths__item-box", mythsToggle);
