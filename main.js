// Creating  variables of different data types
let greeting = "Welcome to JavaScript!"; // string
let age = 30; // number
let isStudent = false; // boolean
let emptyValue = null; // null
let notDefined; // undefined
let person = { firstName: "Daniel", lastName: "Moki" }; // object
let uniqueId = Symbol('id'); // symbol
//  Printing the variables to the console
console.log("Greeting:", greeting);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Empty Value:", emptyValue);
console.log("Not Defined:", notDefined);
console.log("Person Object:", person);
console.log("Unique ID Symbol:", uniqueId);

//Part 2: Arrays

// Creating an array of numbers
let scores = [7, 15, 22, 35, 41];

//  Using  map to create a new array where each number is increased by 5
let increasedScores = scores.map(score => score + 5);
console.log("Increased Scores:", increasedScores);

// 3. Using filter to create a new array that only includes numbers less than 30
let belowThirty = scores.filter(score => score < 30);
console.log("Scores Below 30:", belowThirty);

// 5. Use reduce to find the product of all numbers in the array
let product = scores.reduce((total, score) => total * score, 1);
console.log("Product of Scores:", product);

// 6. Use forEach to print each number in the array with a message
console.log("Scores in Array:");
scores.forEach(score => console.log(`Score: ${score}`));