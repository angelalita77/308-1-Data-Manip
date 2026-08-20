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

// ----------- Start of Part 1 Assignmnet ---------------------
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
const newIsOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique && isDivisibleBy5;


// Finally, log the results.
let allNums = `${n1}, ${n2}, ${n3}, and ${n4}`;

console.log (`Are numbers ${allNums} divisible by 5? ${String(isDivisibleBy5).toUpperCase()}`)
console.log (`Is the first number in ${allNums} larger than the last? ${String(isFirstLargerThanLast).toUpperCase()}`);
console.log (`The following calculation is [ (${n2} - ${n1}) * ${n3} ] / ${n4} = ${answer}`)
console.log(isValid);
console.log (answer);

//Part 2: Practical Math
// Global values
const totalDistance = 1500;
let fuelBudget = 175
let averageFuelCost = 3;
let mpgFrom55MPH = 30;
let mpgFrom60MPH = 28;
let mpgFrom75MPH = 23;

// How many gallons of fuel will you need for the entire trip?
let gallonsAt55mph = totalDistance / mpgFrom55MPH;
let gallonsAt60mph = totalDistance / mpgFrom60MPH;
let gallonsAt75mph = totalDistance / mpgFrom75MPH;


console.log(`The number of gallons of gas used on trip when traveling 55MPH is ${gallonsAt55mph} gallons.`);
console.log(`The number of gallons of gas used on trip when traveling 60MPH is ${gallonsAt60mph} gallons.`);
console.log(`The number of gallons of gas used on trip when traveling 75MPH is ${gallonsAt75mph} gallons.`);



//Will your budget be enough to cover the fuel expense?
let fuelCostA = averageFuelCost * gallonsAt55mph;
let fuelCostB = averageFuelCost * gallonsAt60mph;
let fuelCostC = averageFuelCost * gallonsAt75mph;

console.log(`The only travel that my budget will not cover is the fuel expense \
of ${fuelCostC.toFixed(2)} if traveling at 75PMH`);

fuelCostB;
fuelCostC;

// How long will the trip take, in hours?
let tripATime = totalDistance/55;
let tripBTime = totalDistance/60;
let tripCTime = totalDistance/75;

tripATime;
tripBTime;
tripCTime;

// Compare the results when traveling at an average 
// of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
