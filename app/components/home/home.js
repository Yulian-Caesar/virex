

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    let headerHeight = $(".header").height();
    console.log(headerHeight);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - headerHeight - 10
    }, 1000);
});

let menuToggle = function () {
    $(".menu-mobile").toggleClass("open");
    $(".header__menu-toggle").toggleClass("open");
}

$(document).on('click', '.menu-toggle', menuToggle);
$(document).on('click', '.menu-mobile__button', menuToggle);
$(document).on('click', '.menu-mobile__link', menuToggle);

