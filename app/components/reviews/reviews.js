let reviewsToggle = function () {
    $(this).parents(".reviews-item").toggleClass("open");
};

$(document).on("click", ".reviews-content__button", reviewsToggle);


$('.reviews-wrap').mCustomScrollbar({
    axis: 'y'
});