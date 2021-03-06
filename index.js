/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\n------EXERCISE 1------\n");

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(4, 5));

console.log("\n");

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("\n------EXERCISE 2------\n");

function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  }
  return int1 + int2;
}
console.log(crazySum(5, 5));

console.log("\n");
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\n------EXERCISE 3------\n");
function crazyDiff(x) {
  if (x > 19) {
    return Math.abs((x - 19) * 3);
  }
  return Math.abs(x - 19);
}
console.log(crazyDiff(5));
console.log("\n");
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("\n------EXERCISE 4------\n");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
}
console.log(boundary(100));
console.log("\n");
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("\n------EXERCISE 5------\n");

function strivify(string) {
  if (string.startsWith("")) {
    return string;
  }
  return "Strive" + " " + string;
}
console.log(strivify("stri"));
console.log("\n");
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("\n------EXERCISE 6------\n");

function check3and7(xyz) {
  if (xyz > 0 || xyz % 3 || xyz % 7) {
    return true;
  }
  return false;
}
console.log(check3and7(27));
console.log("\n");
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log("\n------EXERCISE 7------\n");

function reverseString(string) {
  let splitString = string.split("");
  console.log(splitString);
  let reverseArray = splitString.reverse("");
  console.log(reverseArray);
  let joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("matthew"));
console.log("\n");
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("\n------EXERCISE 8------\n");

// function upperFirst(mySentence) {
//   let words = mySentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// }
// console.log(upperFirst("hello everybody, tomorrow is friday"));
// console.log("\n");

function upperFirst(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    word[0] = word[0].toUpperCase();
    let newWords = word.join("");
    words[i] = newWords;
  }
  return words.join(" ");
}
console.log(upperFirst("hello everybody, tomorrow is friday"));
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("\n------EXERCISE 9------\n");
function cutString(str) {
  let arrayStr = str.split("");
  arrayStr.shift();
  arrayStr.pop();

  return arrayStr.join("");
}
console.log(cutString("Everybody"));
console.log("\n");
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log("\n------EXERCISE 1------\n");
/* WRITE YOUR ANSWER HERE */
console.log("\n");
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
