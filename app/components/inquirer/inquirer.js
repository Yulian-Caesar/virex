function progressBar () {
    const numberSteps = $(".inquirer-item").length;
    let currentIndex = Number($(".inquirer-item.current").attr("data-question"));
    const percentage = (currentIndex * 100)/ numberSteps;
    $(".inquirer-progress__inner").width(percentage+ "%");
}

let toggleInquirerCurrent = function () {
    $(".inquirer-item.current").next().addClass("current");
    $(".inquirer-item.current").prev().removeClass("current");
    if ($(".inquirer-item:last-child").hasClass("current")) {
        $(".inquirer-box2").addClass('hide');
        $(".inquirer-box1").addClass('active');
    }
};

$(document).on("click", ".inquirer-test__button", toggleInquirerCurrent);
$(document).on("click", ".inquirer-test__button", progressBar);

$(document).ready(function () {
    progressBar();
});




