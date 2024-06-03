// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// whether each lesson is running this year.
var myWork = [];
for (var i_1 = 1; i_1 <= 10; i_1++) {
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 === 0,
    };
    myWork.push(lesson);
}
// console.log(myWork)
// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
var maxValue = 20;
var minValve = 10;
var randomNumber = Math.floor(Math.random() * (maxValue - minValve) + minValve);
var correctGuess = false;
var predefinedGuesses = [10, 11, 12, 13, 14, 15];
var i = 0;
while (i < predefinedGuesses.length && !correctGuess) {
    correctGuess = true;
    if (randomNumber === predefinedGuesses[i]) {
        console.log("Congratulaions! you guessed the correct number ".concat(randomNumber));
    }
    else if (randomNumber < predefinedGuesses[i]) {
        console.log("your guess is too low ".concat(randomNumber));
    }
    else {
        console.log("your guess is to high ".concat(randomNumber));
    }
    i++;
}
// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
var counter = 0;
var step = 2;
do {
    // console.log(counter)
    counter = counter + step;
} while (counter <= 100);
// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.
var myObject = {
    item1: 'Bricks',
    item2: 'Cement',
    item3: 'Concrete Blocks:'
};
for (var items in myObject) {
    // console.log(items , myObject[items])    
}
//     5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.
var myArray = [];
for (var i_2 = 1; i_2 <= 10; i_2++) {
    myArray.push(i_2);
}
console.log(myArray);
for (var i_3 = 0; i_3 < myArray.length; i_3++) {
    console.log("index ".concat(i_3, ", element ").concat(myArray[i_3]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var i_4 = myArray_1[_i];
    console.log(i_4);
}
