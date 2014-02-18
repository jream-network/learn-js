$(function() {

    // prev, prevAll, next, nextAll,
    // find, parent and parents

    var first = $("#nodes li:first");
    // var first = $("#nodes li").first();
    // first.html('First One!');

    var last = $("#nodes ul li:last").last();
    // var last = $("#nodes ul li").last();
    last.html('This is the last one!');

    $("li").slice(3,4).css({'color': 'green'});

    var siblings = $(".subchild").siblings();
    // $.each(siblings, function(k,v) {
    //     $(v).append(' -- Brother!');
    // });

    // var lastClosest = $("#nodes ul").closest('li');
    // lastClosest.html('Closest to end!');

    // var special = $("#nodes").find('.special');
    // special.css({'background': 'gold'});

    $(".edit").click(function(evt) {
        evt.preventDefault();
        $(this).parent().nextAll().css('background', 'red')
    })

});