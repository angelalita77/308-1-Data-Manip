// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Check five: All numbers are divisible by 5
// This is a simple check using modulus and the AND operator.
const isDivisibleBy5 = n1%5 == 0 && n2%5 == 0 && n3%5 == 0 && n4%5 == 0;

// Check six: Is the first number larger than the last
// This is a simple comparison check using > or <
const isFirstLargerThanLast = n1 > n4;

// Arithmetic Chain Problem
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let answer = [ (n2 - n1) * n3] / n4;


// New isOver25
// Improve isOver without using the NOT (!) logical function


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique && isDivisibleBy5;

// Finally, log the results.
console.log (isFirstLargerThanLast)
console.log (isDivisibleBy5);
console.log(isValid);
console.log (answer);

//Part 2: Practical Math
// Global values
const totalDistance = 1500;
let fuelBudget = 175
let averageFuelCost = 3;
let mph55Speed = 30;
let mph60Speed = 28;
let mph75Speed = 23;

// How many gallons of fuel will you need for the entire trip?
let gallonsAt55mph = totalDistance / mph55Speed;
let gallonsAt60mph = totalDistance / mph60Speed;
let gallonsAt75mph = totalDistance / mph75Speed;

console.log(`The number of gallons of gas used on trip when traffling 55MPH is ${gallonsAt55mph}`);
console.log("The number of gallons of gas used on trip when traffling 60MPH is " + totalDistance / mph60Speed);

let something = totalDistance + fuelBudget;



// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
