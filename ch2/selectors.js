$(function() {

    $("#toggle").click(function(evt) {
        evt.preventDefault();
        $(".color").toggle();
    });

    $('#electronics li:last-child').hide();

});