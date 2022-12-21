// Day 11
// Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// Destructing Arrays
// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree] = numbers

// console.log(numOne, numTwo, numThree)
//  1 2 3



// const names = ['Asabeneh', 'Brook', 'David', 'John']
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

// console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)
// Asabeneh Brook David John



// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   const [frontEnd, backEnd] = fullStack

//   console.log(frontEnd)
//   console.log(backEnd)

// ["HTML", "CSS", "JS", "React"]
// ["Node", "Express", "MongoDB"]





// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)

// 1 2 3
// [4, 5, 6, 7, 8, 9, 10]


// Destructuring during iteration
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
// console.log(country, city)
// }




// Destructuring Object
// When we destructure the name of the variable we use 
// to destructure should 
// be exactly the same as the key or property of the object.
//See the example below.

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area, perimeter } = rectangle

//   console.log(width, height, area, perimeter)
//   20 10 200 undefined



// Renaming during structuring
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width: w, height: h, area: a, perimeter: p } = rectangle

//   console.log(w, h, a, p)
//   20 10 200 undefined

// If the key is not found in the object the variable will be assigned to undefined.
//Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area, perimeter = 60 } = rectangle
  
//   console.log(width, height, area, perimeter) //20 10 200 60



// const rectangle = {
//     width: 30,
//     height: 10,
//     area: 200,
//     perimeter: 80
//   }
//   let { width, height, area, perimeter = 60 } = rectangle
//   console.log(width, height, area, perimeter) //30 10 200 80





// Object parameter without destructuring
// // Without destructuring
// const rect = {
//   width: 20,
//   height: 10
// }
// const calculatePerimeter = rectangle => {
//   return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(rect)) // 60




// Spread operator to get the rest of array elements

// const countries = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
// ];

// let [ger,fra,,...others]=countries;
// console.log(ger); // Germany 
// console.log(fra); // France
// console.log(others) // Finland-Iceland




// Spread operator to copy array

// const evens = [0, 2, 4, 6, 8, 10]
// const odd = [1,3,5,7,9,11];
// const newMethod=[...evens,...odd];
// console.log(newMethod)



// const objTest={
//     title:'Harry Potter',
//     country:'england',
//     writter:'J.K'
// }

// const harryObj={...objTest,title:'Rambo'};
// console.log(harryObj)



// Exercises
// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
// 1.1) estructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp
// const [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=constants;
// console.log(e);
// console.log(pi);
// console.log(gravity);
// console.log(humanBodyTemp);
// console.log(waterBoilingTemp);
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// 1.2) Destructure and assign the elements of countries array to fin, est, sw, den, nor
// const [fin,est,sw,den,nor]=countries;
// console.log(fin,est,sw,den,nor);
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
// 1.3) Destructure the rectangle object by its properties or keys.
// const {width,height,area,parimeter}=rectangle;
// console.log(width);
// console.log(height);
// console.log(area);
// console.log(parimeter);
const users = [
{
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
},
{
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
},
{
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
},
{
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
},
{
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
},
{
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
},
{
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}];

// Exercises: Level 2
// 2.1) Iterate through the users array and get all the keys of the object using destructuring
for(let{name,scores,skills,age} of users){
    console.log(name,scores,skills,age);
}

// 2.2) Find the persons who have less than two skills
let lessThanTwo=users.filter(num=>num.skills.length<2);
console.log(lessThanTwo);



// Exercises: Level 3 
// 3.1) Destructure the countries object print name, capital, population and languages of all countries
// 3.2) A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name,skills,[htmlScore,cssScore,jsScore,reactScore]]=student
// console.log(skills, jsScore, reactScore)


let nums=[1,2,2,3,4,5,612,22,2];
console.group('numbers:');
console.log(nums);
console.groupEnd();
let names = ['salome','nuki','mari'];
console.group('names:');
console.log(names)
console.groupEnd();


