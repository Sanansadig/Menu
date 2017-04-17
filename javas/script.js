$(document).ready(function() {
    $('[id="bir"]').css("display", "none");
})

$(document).ready(function() {
    $('[id="circle"]').click(function() {
        $(this).siblings().css("display", "block");
        console.log(this);
    })
})

$(document).ready(function() {
    $("#circle1").click(function() {
        $(this).siblings().css("display", "block");
    })
})