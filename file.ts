// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// whether each lesson is running this year.

let myWork: lesson[] = [];

type lesson = {
  name: string;
  status: boolean;
};

for (let i = 1; i <= 10; i++) {
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 === 0,
  };
  myWork.push(lesson);
}
console.log(myWork)

// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.

const maxValue: number = 20;

const minValve: number = 10;

const randomNumber = Math.floor(
  Math.random() * (maxValue - minValve) + minValve
);

let correctGuess: boolean = false;

const predefinedGuesses: number[] = [10, 11, 12, 13, 14, 15];

let i: number = 0;

while (i < predefinedGuesses.length && !correctGuess) {
  correctGuess = true;
  if (randomNumber === predefinedGuesses[i]) {
    console.log(
      `Congratulaions! you guessed the correct number ${randomNumber}`
    );
  } else if (randomNumber < predefinedGuesses[i]) {
    console.log(`your guess is too low ${randomNumber}`);
  } else {
    console.log(`your guess is to high ${randomNumber}`);
  }
  i++;
}

// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.

let counter = 0;
const step = 2;
do {
  console.log(counter)
  counter = counter + step;
} while (counter <= 100);

// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.

const myObject = {
  item1: "Bricks",
  item2: "Cement",
  item3: "Concrete Blocks:",
};

for (const items in myObject) {
  console.log(items , myObject[items])
}

//     5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.

let myArray: number[] = [];

for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(`index ${i}, element ${myArray[i]}`);
}

for (const i of myArray) {
  console.log(i);
}
