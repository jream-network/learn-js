// While Loops
var loops = 0;
while (loops < 10) {
    console.log('Its true!' + loops);
    ++loops;
}

// For Loop
// 3 Arguments
// Starting Value, Condition, Increment Value

var data = [
    'cat',
    [
        'hamster',
        'corn'
    ],
    'dog',
    'llama',
    [
        'pig',
        'hen'
    ]
];
var i = 0;
var j, len, iter;

for (i; i < data.length; i++) {
    iter = data[i];

    if (typeof(iter) == 'string') {
        console.log(data[i]);
        continue;
    }

    j = 0;
    len = iter.length;
    for (j; j < len; j++) {
        console.log('  -- ' + iter[j]);
    }
}