let menuToggle = function () {
    $(".menu-mobile").toggleClass("open");
    $(".header__menu-toggle").toggleClass("open");
}

$(document).on('click', '.menu-toggle', menuToggle);