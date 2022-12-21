// 📔 Day 3


// Booleans
    // Truthy values
    // Falsy values
// Undefined
// Null
// Operators
    // Assignment operators
    // Arithmetic Operators
    // Comparison Operators
    // Logical Operators
    // Increment Operator
    // Decrement Operator
    // Ternary Operators
    // Operator Precedence
// Window Methods
    // Window alert() method
    // Window prompt() method
    // Window confirm() method
// Date Object
    // Creating a time object
    // Getting full year
    // Getting month
    // Getting date
    // Getting day
    // Getting hours
    // Getting minutes
    // Getting seconds
    // Getting time
// 💻 Day 3: Exercises
    // Exercises: Level 1
    // Exercises: Level 2
    // Exercises: Level 3




// Day N-3 Booleans, Operators, Date

// A boolean data type represents one of the two values:true
// or false. Boolean value is either true or false. The use of these
// data types will be clear when you start the comparison operator. 
// Any comparisons return a boolean value which is either true or false

/* 
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
*/

//_______________________________

//Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

//_______________________________

//Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string



//  Day 3: Exercises


//1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName='Arsen';
let lastName='Akhalaia';
let country='Georgia';
let age=20;
let isMarried=false;

//2) Check if type of '10' is equal to 10
console.log(typeof '10'===typeof 10);

//3) Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10);

//4) Write three JavaScript statement which provide truthy value.
let trueValues=12, secondTrue='string';

//5) check values with console.log();
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
console.log(4!='4')

//6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')

//7) Use the Date object to do the following activities

const testDate= new Date();
console.log(testDate.getFullYear()); //What is the year today?
console.log(testDate.getMonth()); //What is the month today as a number?
console.log(testDate.getDate()); //What is the date today?
console.log(testDate.getDay()); //What is the day today as a number?
console.log(testDate.getHours()); //What is the hours now?
console.log(testDate.getMinutes()); //What is the minutes now?
console.log(testDate.getTime()); //Find out the numbers of seconds elapsed from January 1, 1970 to now.






/// exercises : Level 2 

//1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt('enter base:');
// let height = prompt('enter height:');
// let area = 0.5 * base * height;
// alert('The area of the triangle is'+area);


//2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let a = prompt('Enter side a:');
// let b = prompt('Enter side b:');
// let c = prompt('Enter sice c:');
// let parameter=Number(a)+Number(b)+Number(c);
// alert('The perimeter of the triangle is ' + parameter)


//3) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length=Number(prompt('enter lengt:'));
// let width=Number(prompt('enter width:'));
// let area=(length * width * (length + width) * 2);
// console.log(area); 


//4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = Number(prompt("entre a radius"));
// let area=Math.PI * radius * radius;
// let circumference=2 * Math.PI * radius;
// console.log(area, circumference);


//5) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1=2,x2=2;
// let y1=6,y2=10;
// let slopeM=(y2-y1)/(x2-x1);
// console.log(slopeM); //result is infinity because 4/2 is Infinity in Javascript

//6) Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours=Number(prompt('enter hours:'));
// let ratePerHour=Number(prompt('Enter rate per hour'));
// console.log('Your weekly earning is '+ hours * ratePerHour);

//7) If the length of your name is greater than 7 say, your name is long else say your name is short.
// let myName='Arsen';
// myName>7?console.log('longer'):console.log('shorter');

//8) Compare your first name length and your family name length and you should get this output.
// let firstNames = 'Arsen';
// let lastNames = 'Akhalaia';
// console.log(`Your first name, ${firstNames} is shorter than your family name, '${lastNames}'`)

//9) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// console.log(`I am ${myAge-yourAge} years older than you`)

//10) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let birth = Number(prompt('Enter birth year:'));
// let adult = Date.getFullYear()-birth;
// adult>18?alert(`you are ${2022-birth}. You are old enough to drive`):alert(`You are ${2022-birth}. You will be allowed to drive after ${18-adult} years`);

//11 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let years = Number(prompt('Enter number of years you live:'));
// let yearsToSeconds=years*365*24*60*60;
// alert('you lived ' + yearsToSeconds + " seconds");
