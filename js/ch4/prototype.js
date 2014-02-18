var Util = {
    name: 'Util',
    log: function(msg) {
        console.log('-------------------------');
        console.log(msg);
        console.log('-------------------------');
    }
};


var User = function() {
    name: 'Page'
}

// Guest.prototype = Util;
// Guest.prototype.swimming = 1;
// var Guest = function() {
//     name: 'DOM'
// }

user = new User();
user.prototype = Util;
// guest = new Guest();

console.log(user);
console.log(guest);