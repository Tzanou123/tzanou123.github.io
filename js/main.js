console.log("hello world");

$(document).ready(function () {
    $("body").on("click", ".changeColor", function () {
        $("body").removeClass()
        if ($(this).hasClass("btn-primary")) {
            $("body").addClass('bg-primary')
        } else if ($(this).hasClass("btn-secondary")) {
            $("body").addClass('bg-secondary')
        } else if ($(this).hasClass("btn-success")) {
            $("body").addClass('bg-success')
        } else if ($(this).hasClass("btn-warning")) {
            $("body").addClass('bg-warning')
        }
    });
});