$(function() {

    var ages = [12, 13, 14, 21, 15, 16, 18];
    var nums = [1, 2, 3, [4, 5, 6]];

    var firstResult = _.first(ages, 3);
    // console.log(firstResult);

    var lastResult = _.last(ages, 2);
    // console.log(lastResult);

    var restResult = _.rest(ages, 3);
    // console.log(restResult);

    var flattenResult = _.flatten(nums);
    // console.log(nums)
    // console.log(flattenResult)

    var compactResult = _.compact([1, '', false]);
    // console.log(compactResult);

    var withoutResult = _.without([1,2,1,2,1,2,1], 1);
    // console.log(withoutResult);

    var indexOfResult = _.indexOf(ages, 13);
    // console.log(indexOfResult);

    var range = _.range(5, 51, 5);
    console.log(range);


});