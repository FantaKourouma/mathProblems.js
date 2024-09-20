// Part 1: Math Problems

// Declare variables for the four unique numbers 
const n1 = 11;
const n2 = 19;
const n3 = 7; 
const n4 = 13;

// Check if the numbers add up to 50
const isValid = (n1 + n2 + n3 + n4) === 50;
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Check if all numbers are divisible by 5
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}.`);

// Arithmetic chain
const subtract = n2 - n1;
const multiply = subtract * n3;
const remainder = multiply % n4;
console.log(`The final resuly of the arithmetic chain is; ${remainder}.`)

// Renaming variable to avoid NOT operator
const isOver25 = n1 + n2 + n3 + n4 > 25;
console.log(`The sum of the numbers is over 25: ${isOver25}.`);


//Part 2: Practical Math

// Constants for trip calculations
const totalDistance = 1500; // miles
const fuelCostPerGallon = 3; // dollars
const budget = 175; // dollars

// Fuel efficiency at different speeds
const speeds = {
    55: 30, // mpg
    60: 28,
    75: 23
};

// Function to calculate fuel needs and cost
const calculateTripDetails = (speed, mpg) => {
    const gallonsNeeded = totalDistance / mpg;
    const totalCost = gallonsNeeded * fuelCostPerGallon;
    const timeTaken = totalDistance / speed;

    console.log(`Traveling at ${speed} mph:`);
    console.log(`Gallon needed: ${gallonsNeeded.toFixed(2)}`);
    console.log(`Total Fuel Cost: $${totalCost.toFixed(2)}`);
    console.log(`Time taken: ${timeTaken.toFixed(2)} hours`);
    console.log(`Is the budget sufficient? ${totalCost <= budget}`);
};

// Calculate for each speed
for (const [speed,mpg] of Object.entries(speeds)) {
    calculateTripDetails(Number(speed), mpg);
}


//part 3: Future Exploration
// To enhance our program, we can implement control flow (if-else statements) to adjust speed based on budget.
// Additionally, we can create more functions for different calculations to keep our code modular and reusable.


git