$(function() {

    var ages = [12, 13, 14, 15, 16, 18];
    var games = [
        {
            'name': 'Mario',
            'rating': 10,
            'system': 'all'
        },
        {
            'name': 'Wario',
            'rating': 5,
            'system': 'all'
        }
    ];

    // _.each(ages, function(a) {
    //     console.log(a);
    // });

    var findResult = _.find(ages, function(a) {
        return a > 15;
    });

    // console.log(findResult);

    var filterResult = _.filter(ages, function(a) {
        return a % 2 == 0;
    });

    // console.log(filterResult);

    var pluckResult = _.pluck(games, 'name');
    console.log(pluckResult);


});