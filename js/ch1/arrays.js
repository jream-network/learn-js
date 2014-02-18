var ages = [5, 10, 15];
var other = ['Cat', 5, 'Dog', 'Fish'];

//ages.shift();
//ages.sort();
//other.reverse();

//ages.push('NewItem'); // Puts item at end
//ages.pop(); // Takes last item off

//ages.shift(); // Takes first item off
//ages.unshift('Fishing'); // Puts item at start

other = other.join(', ');

var cut = ages.splice(1, 1);
console.log(cut);
console.log(ages);
console.log(other);

animals = [
    "Horse",
    "Dog",
    [
        "Lizard",
        "Snake"
    ]
];

for (var i = 0; i < animals.length; i++) {
    if (typeof animals[i] == 'object')
    {
        for (j = 0; j < animals[i].length; j++)
        {
            console.log(animals[i][j])
        }
    }
    else
    {
        console.log(animals[i])
    }
}

console.log(animals[2][0]);