function age() {
    console.log(25);
}

age();

function animal(name, color) {
    if (typeof name == 'undefined') {
        name = 'dog';
    }
    return 'My ' + name + ' ' + color + ' ran away!';
}

var result = animal('Pig', 'red');
console.log(result);

var create = {
    // Looks like: man()
    man: function(height) {
        return "Generating a man. Who is " + height + ' tall';
    },
    woman: function() {
        return "Generating a woman.";
    },
    animal: {
        dog: function() {
            return 'Arf'
        }
    }
};

var a = create.man('2 feet');
console.log(a);

var b = create.animal.dog();
console.log(b);