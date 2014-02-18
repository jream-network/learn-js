$(function() {

    var tplWelcome = _.template('\
        Hello <strong><%= name %></strong>\n\
        Welcome to the site!<br />\n\
    ');

    var data = [
        {name: 'Ted'},
        {name: 'Jen'},
        {name: 'Ben'}
    ];

    _.each(data, function(d) {
        var result = tplWelcome(d);
        $("#content").append(result);
    });


});