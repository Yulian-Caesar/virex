$(document).ready(function () {
    progressBar();
    function progressBar () {
        let numberSteps = $(".inquirer-item").length;
        let currentIndex = Number($(".inquirer-item.current").attr("data-question"));
        const percentage = (currentIndex * 100)/ numberSteps;
        $(".inquirer-progress__inner").width(percentage+ "%");
        $(".js--progress__current").html(currentIndex);
        $(".js--progress__all").html(numberSteps);
    }

    let toggleInquirerCurrent = function () {
        let numberSteps = $(".inquirer-item").length;
        let currentIndex = Number($(".inquirer-item.current").attr("data-question"));
        $(".inquirer-item.current").next().addClass("current");
        $(".inquirer-item.current").prev().removeClass("current");
        if (numberSteps == currentIndex) {
            $(".inquirer-box2").addClass('hide');
            $(".inquirer-box1").addClass('show');
        }
    };

    $(document).on("click", ".inquirer-test__button", toggleInquirerCurrent);
    $(document).on("click", ".inquirer-test__button", progressBar);
});




