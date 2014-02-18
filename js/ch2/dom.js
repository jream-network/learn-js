$(function() {

    $("#comment-form").submit(function(evt) {
        evt.preventDefault();
        var comment = $("textarea[name=comment]").val();
        $("#comment-container").prepend('<div class="general">' + comment + '</div>');
        $("#comment-container div:first-child").addClass('highlight');

        setTimeout(function() {
            var el = $("#comment-container div.highlight");
            var use = el.length - 1;
            if (use < 0) {
                return false;
            }
            $(el[use]).removeClass('highlight');
        }, 2000);
    });

});