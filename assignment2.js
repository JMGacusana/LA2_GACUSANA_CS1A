/* CS1A_JMGacusana_C1-A2.js
C1-A2: Mathematical and Comparison Operations, and Type Conversions. 
I use let to declare a variable and const to declare a constant.
*/
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

//I declared a new variable which is "sum" for the making the sum of the variable a, b, c, d, and e.
let sum = a+b+c+d+e;

//then i created a console.log to show the answer in the variable sum.
console.log(sum);

// i created another variable for >, <, >=, <=, === to compare them to get the value of d and e.
let greaterThan = d > e;
let lessThan = d < e;
let greaterThan_equal = d >= e;
let lessThan_equal = d <= e;
let strictlyEqual = d === e;

//again i use the console.log to print or show the answer in the assign variables.
console.log(greaterThan);
console.log(lessThan);
console.log(greaterThan_equal);
console.log(lessThan_equal);
console.log(strictlyEqual);

// subtration of the values in variable
let substract = a-b-c-d-e;

// multiplying the values of variable a and c, devided by const e.
// i declare a new variable to handle the solution of answer that we compute.
let equal = (a*b) / e;
// printing the output of equal
console.log(equal);
let exponentResult = e**c; //e raised to the power of c
// in the last part we cannot change the value of const, because it may cause an error
