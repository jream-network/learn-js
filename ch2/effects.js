$(function() {

    var isAnimated = false;
    $("#submit").click(function(evt) {
        evt.preventDefault();
        isAnimated = true;
        $("#data1").slideDown(500, function() {
            isAnimated = false;
        });
    });

    $("#unsubmit").click(function(evt) {
        evt.preventDefault();
        if (isAnimated == false)
        $("#data1").slideUp(500);
    });

    var toggleAnimating = false;
    $("#toggler").click(function(evt) {
        evt.preventDefault();
        if (toggleAnimating == false) {
            $("#data2").slideToggle(500, function() {
                toggleAnimating = false;
            });
        }
        toggleAnimating = true;
    });

    $("#animate").click(function(evt) {
        evt.preventDefault();
        $("#data3").animate({
            opacity: 0.5,
            marginLeft: '250px'
        }, {
            duration: 500,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            }
        });

    });

    $("#animate2").click(function(evt) {
        evt.preventDefault();
        var margin = $("#data4").css('marginLeft').replace('px', '');
        if (margin >= 200) {
            $("#data4").animate({
                marginLeft: "-=50px"
            }, 2000);
        }
        alert(margin)
        $("#data4").animate({
            marginLeft: "+=50px"
        }, 2000);
    });


});