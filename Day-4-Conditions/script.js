// Day 4
// Conditionals
/*
Conditional statements are used for make decisions
based on different conditions. By default ,
statements in JavaScript script executed sequentially from top to bottom.
If the processing logic require so, the sequential flow of execution 
can be altered in two ways:



Conditions can be implementing using the following ways:
if
if else
if else if else
switch
ternary operator
*/




// Exercises 
//1) Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//give feedback:'You are old enough to drive' but if not 18 give another
//feedback stating to wait for the number of years he needs to turn 18.

// let age =Number(prompt('Enter your age: '));
// age>=18?console.log('You are old enough to drive.'):
// console.log(`You are left with ${18-age} years to drive.`);


//_________________________________//


//2) Compare the values of myAge and yourAge using if … else. 
//Based on the comparison and log the result to console 
//stating who is older (me or you). Use prompt(“Enter your age:”) 
//to get the age as input.

// let myAge=19;
// let yourAge=Number(prompt('Enter your age:'));
// yourAge>myAge?alert(`you are ${yourAge-myAge} years older than me`):
// alert(`you are ${myAge-yourAge} years younger than me `)


//_________________________________//


//#3 If a is greater than b return 'a is greater than b' 
//else 'a is less than b'. Try to implement it in to w

// let a=4;
// let b=3;

// if(a>b){
//     console.log('a is bigger')
// }else{
//     console.log('b is greager')
// }

//with Ternary Operator 

// a>b?console.log('a is greater'):console.log('b is greater');


//____________________________________//


//4) Even numbers are divisible by 2 and the remainder is zero. 
//How do you check, if a number is even or not using JavaScript?

// let number=Number(prompt('Enter a number: '));
// number%2===0?console.log(`${number} is a even number`):
// console.log(`${number} is an odd number`);


//__________________________________//


//5) Exercises: Level 2


/*2.1) 
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

// const checkGrades = num=>{
//     if(num>100 && num<0){
//         return 'ERROR';
//     }else if(num>80 && num <100){
//         return 'A'
//     }else if(num===100){
//         return 'A+'
//     }else if(num>60 && num <80){
//         return 'B'
//     }else if(num>40 && num<60){
//         return 'C'
//     }else if(num<40){
//         return 'Sheni deda sheveci me '
//     }
// }

// console.log(checkGrades(10));
// console.log(checkGrades(99));
// console.log(checkGrades(100));


//__________________________________//

//2.2) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let season=prompt('check the month: ');
// let test = season.toLocaleLowerCase();
// if(test=='september' || test=='october' || test=='nobember'){
//     console.log('The season is Autumn');
// }else if(test=='december' || test=='january' || test=='february'){
//     console.log('the season is Winter');
// }else if(test=='march' || test=='april' || test=='may'){
//     console.log('the season is spring');
// }else if(test=='juny' || test=='july' || test=='august'){
//     console.log('the season is summer');
// }else{
//     console.log('chawere sworad sheni dedis muteli movtyan me <3')
// }


//_______________________________//


//2.3) Check if a day is weekend day or a working day. Your script will take day as an input

// let day= prompt(' What is the day  today?');
// let betterDay=day.toLowerCase();

// if(betterDay=='saturday' || betterDay=='sunday'){
//     console.log(`${betterDay} is a weekend`);
// }else if(betterDay=='monday' || 'wednesday' || 'friday' || 'thuesday'){
//     console.log(`${betterDay} is a working day`);
// }

//_______________________________//
//_______________________________//
//_______________________________//
