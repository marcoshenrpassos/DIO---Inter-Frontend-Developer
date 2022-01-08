/* var player1 = 0;
var player2 = 1;
var score;

//ternary if
player1 != -1 && player2 != -1 ? console.log('The players are valid') : console.log('The players are invalid');
//if
if (player1 > 0 && player2 == 0) {
    console.log('Player 1 scored a goal');
    score = player1 > player2;
} 
//else if
else if (player2 > 0 && player1 ==0) {
    console.log('Player 2 scored a goal');
    score = player2 > player1;
} 
// else
else {
    console.log('Nobody scored a goal');
}

//switch
switch (score) {
    case score = player1 > player2:
        console.log('Player 1 win!');
        break
    case score = player2 > player1:
        console.log('Player 2 win!');
        break
        default:
        console.log('No one win!');
}
 */


/* //ternary if
player1 != -1 && player2 != -1 ? console.log('The players are valid') : console.log('The players are invalid');
if (player1 > 0) {
    console.log('Player 1 scored a goal');
} else if (player2 > 0) {
    console.log('Player 2 scored a goal');
} else {
    console.log('Nobody scored a goal');
}
 */


/* //nesting
if (player1 != -1) {
    if (player1 > 0) {
        console.log('Player 1 scored a goal');
    } else if (player2 > 0) {
        console.log('Player 2 scored a goal');
    } else {
        console.log('Nobody scored a goal');
    }
} */

let array = ['value1', 'value2', 'value3', 'value4', 'value5',]
let object = { property1: 'value1', property2: 'value2', property3: 'value3', }

/* //for -  executes the instruction till it becomes false
for (let index = 0; index < array.length; index++){
    console.log(index);
} */

/* //for/in - executes the repetition from a property
//array
for (let i in array){
    console.log(i);
}

//object
for (i in object) { // do not need 'let'
    console.log(i);
} */

/* //for/of
//array
for (i of array) {
 console.log(i);
}

//object
for (i of object.property1) {
    console.log(i);
} */

var a = 0;

/* while (a < 10) {
    a++;
    console.log(a);
} */

do {
    a++;
    console.log(a);
}    while (a < 10);
