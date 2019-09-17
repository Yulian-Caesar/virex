let mythsToggle = function () {
    $(this).parents(".myths__item-box").toggleClass("-open-answer");
    $(this).toggleClass("-minus");
};

$(document).on("click", ".myths__button-show", mythsToggle);
