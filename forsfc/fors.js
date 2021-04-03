$(function () {
    NavBars.setResponsiveDropDownBehavior();

    $(window).on("resize", function () {
        NavBars.setResponsiveDropDownBehavior();
    });
});