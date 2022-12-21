// Day 9
                    // Higher Order Function
// Higher order functions are functions which take other function as
//a parameter or return a function as a value. The function passed as
// a parameter is called callback.






//                Functional Programming



/*Instead of writing regular loop, latest version of JavaScript 
introduced lots of built in methods which can help us to solve 
complicated problems. All builtin methods take callback function.
In this section, we will see forEach, map, filter, reduce, find,
every, some, and sort.



            forEach

forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
1
2
3
4
5

_________________________________________



            MAP
map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);

//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
[1, 4, 9, 16, 25]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)



_____________________________

                FILTER

Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)
['Finland', 'Ireland']
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
['Albania', 'Bolivia','Ethiopia']
const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
['Japan', 'Kenya']
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
*/









// Exercises
// Exercises: Level 1


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'france'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//1.1) Explain the difference between forEach, map, filter, and reduce..
        //in Javascript there are concept, like   'FUNCITONAL PROGRAMMING'
        //we use higher order functions to reduce code, and make it simplier to write hard logic
        //with Array built in methods, such as forEach,map,filter and reduce 

        //each method has their own usage, for example we use forEach method to loop throught an array, it takes threee
        //arguments, and returns .forEach(element,index,array);

        //we use map Method for mapping some logic, to convert whole array to some logic with callBack function,
        //like in filter method, we use this function to do some logic with and return filtered array
        //we use reduce to reduce our array, with some logic,FOR example, sum or multiply each array elements and return that <3  


//1.2) Define a callback function before you use it in forEach, map, filter or reduce.
let callBack=call=>{
    console.log(call);
};
//1.3) Use forEach to console.log each country in the countries array.
// countries.forEach(callBack);
// countries.forEach(num=>{
//     console.log(num);
// })
//1.4) Use forEach to console.log each name in the names array.
// names.forEach(callBack);
//1.5) Use forEach to console.log each number in the numbers array.
// numbers.forEach(callBack);
//1.6) Use map to create a new array by changing each country to uppercase in the countries array.
// let toUpper=countries.map(up=>up.toUpperCase());
// console.log(toUpper);
//1.7) Use map to create an array of countries length from countries array.
// let countriesLength=countries.map(length=>length.length)
// console.log(countriesLength);
//1.8) Use map to create a new array by changing each number to square in the numbers array
// let square=numbers.map(square=>square **2 );
// console.log(square);
//1.9) Use map to change to each name to uppercase in the names array
// let toUpper=names.map(num=>num.toUpperCase());
// console.log(toUpper);
//1.10)  Use map to map the products array to its corresponding prices.
// let prod=products.map(nums=>nums.price)
// console.log(prod)
//1.11) Use filter to filter out countries containing land.
// let land = countries.filter(lands=>lands.includes('land'));
// console.log(land)
//1.12) Use filter to filter out countries having six character.
// let six=countries.filter(num=>num.length===6);
// console.log(six)
//1.13) Use filter to filter out countries containing six letters and more in the country array.
// let sixOrMore=countries.filter(six=>six.length>=6);
// console.log(sixOrMore)
//1.14) Use filter to filter out country start with 'E';
// let countriesWithE=countries.filter(e=>e.endsWith('e'));
// console.log(countriesWithE);
//1.15) Use filter to filter out only prices with values.
// let pricesOnly=products.filter(pro=>pro.price>0);
// console.log(pricesOnly);
//1.16) Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// let getStringLists=arr=>arr.filter(num=>typeof num==='string');
// let onlyIngtegers=arr=>arr.filter(num=>typeof num==='number')
// console.log(onlyIngtegers([1,2,3,'bacho','akhalaia']))
// console.log(getStringLists([1,2,3,'bacho','akhalaia']))
//1.17) Use reduce to sum all the numbers in the numbers array.
// let sumOfNumbers=numbers.reduce((a,b)=>a+b,0);
// console.log(sumOfNumbers)
//1.18) Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// let concat=['Estonia, Finland, Sweden, Denmark, Norway, and IceLand'].reduce((a,b)=>a.concat(b),countries)
// console.log(concat)
//1.19) Explain the difference between some and every
    //The main difference between some() and every() method seems pretty weird for beginners,
    //but it really isn't, we are using every() method, to check if all array elements match that logic,
    //if every element doesn't match some logic, every() method returns false
    //for example:
    // let arr=[10,20,30,40,50,60,100];

    // let isEven=arr.every(num=>num%2===0);
    // console.log(isEven); //True
    // this example returns trues, because all that elements are Even
    // Thats it

    //but in some() method, it could return True if at least one element match that logic
    // let arr2=[10,20,31,40,50,60,100];
    // let isSomeOdd=arr2.some(num=>num%2===1);
    // console.log(isSomeOdd); //True
    // statement will be True because, at least one element is odd here 
    // thats main difference between, some() and every() method in Javascript

    /*  Google explanation
    some() method in JavaScript is used to check whether at least one of the elements
    of the array satisfies the given condition or not. The only difference is that 
    the some() method will return 
    true if any predicate is true while every() method will return true if all 
    predicates are true
    */

//1.20) Use some to check if some names' length greater than seven in names array
// let graterThanSeven=countries.filter(len=>len.length>7);
// console.log(graterThanSeven);
//1.21) Use every to check if all the countries contain the word land
// let land =countries.every(la=>la.includes('a'));
// console.log(land)
//1.22) Explain the difference between find and findIndex.
//differerence betWeen find() and findIndex(), is pretty confusing for beginners
//but it really is not, for example we should use find() method to find if the certain value exists in the array,
//if this value exists, method returns this value, if condition is false, it returs -1;
//but in findIndex() method, situation is kinda different, it only returns the position of existed value/element
// The method find() is very similar to findIndex() . The only difference is that the find method returns the element value, but the findIndex method returns the element index.
//1.23) Use find to find the first country containing only six letters in the countries array
// let finding =countries.find(len=>len.length>6);
// console.log(finding);
//1.24) Use findIndex to find the position of the first country containing only six letters in the countries array
// let test=countries.findIndex(index=>index.length===6);
// console.log(test);
//1.25) Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// let finding=countries.findIndex(find=>find.includes('Norway'));
// console.log(finding);
//1.26) Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// let fuckRussia=countries.findIndex(count=>count.includes('Russia'));
// console.log(fuckRussia);




// Exercises: Level 2




//2.1) Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ];


// let test = products.filter(num=>num.price).reduce((c,b)=>{
//     return Number(c+b.price)
// },0);
// console.log(test)

//2.2) Find the sum of price of products using only reduce reduce(callback))
// const sum = products.reduce((a,b)=>{
//     return Number(a+b.price);
// },0)
// console.log(sum)


//2.3) Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan'))
// let categorizeCountries=arr=>{
//     return arr.filter(a=>a.includes('land' || 'ia' ||  'island' || 'stan'))
// }

// console.log(categorizeCountries(countries))

//2.4) Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// let firstTen=countries.slice(0,10);

//2.5) Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// let lastTen=countires.slice(-10)




// Exercises: Level 3

//3.1) Use the countries information, in the data folder. Sort countries by name, by capital, by population

// let sorting =countries.sort((a,b)=>{
//     return a-b
// })


//3.2) Find the 10 most spoken languages:
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]








// Quick JavaScript Array Functions Practice








const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// MAP
// Get an array of all names
    let namess=characters.map(name=>name.name);
// Get an array of all heights
    let heights=characters.map(height=>height.height)
// Get an array of objects with just name and height properties
    let both=characters.map(all=>{
        return [all.name, all.height];
    });
// Get an array of all first names
    let firtNames=characters.map(all=>all.name.split(' ')[0])



// REDUCE
// Get the total mass of all characters
    let total=characters.reduce((a,b)=>{
        return Number(a)+Number(b.mass);
        },0)
    // console.log(total)
// Get the total height of all characters
    let totalHeight=characters.reduce((a,b)=>{
        return a+ Number(b.height);
    },0);
    // console.log(totalHeight)




// FILTER
// Get characters with mass greater than 100
    let greaterThanHundrid=characters.filter(great=>great.mass>100);
    // console.log(greaterThanHundrid);
// Get characters with height less than 200
    let heightLess=characters.filter(less=>less.height<200);
    // console.log(heightLess)
// Get all male characters
    let males=characters.filter(male=>male.gender==='male');
    // console.log(males)
// Get all female characters
    let females=characters.filter(females=>females.gender==='female');
    // console.log(females)



// SORT
// Sort by name
    let sortByName=characters.sort((a,b)=>{
        if(a.name<b.name){
            return -1;
        }
        return 1;
    });
    console.log(sortByName)
// Sort by mass
    let sortByMass=characters.sort((a,b)=>a.mass-b.mass);
    // console.log(sortByMass); +++
// Sort by height
    let sortByHeight=characters.sort((a,b)=>a.height-b.height);
    // console.log(sortByHeight); +++
// Sot by gender
    let sortByGender=characters.sort((a,b)=>{
        if(a.gender==='female'){
            return -1;
        }
        return 1 
    });
    console.log(sortByGender);





// EVERY
// Does every character have blue eyes?
    let blueEyes=characters.every(blue=>blue.eye_color==='blue')
    // console.log(blueEyes);
// Does every character have mass more than 40?
    let massMoreThan40=characters.every(point=>point>40);
    // console.log(massMoreThan40);
// Is every character shorter than 200?
    let shorterThan200=characters.every(short=>short.height<200);
    // console.log(shorterThan200);
// Is every character male?
    let isEveryMale=characters.every(male=>male.gender==='male');
    // console.log(isEveryMale);




// SOME
// Is there at least one male character?
    let atLeastOne=characters.some(male=>male.gender==='male');
    // console.log(atLeastOne);
// Is there at least one character with blue eyes?
    let atLeastWBlue=characters.some(blue=>blue.eye_color==='blue');
    // console.log(atLeastWBlue);
// Is there at least one character taller than 200?
    let lessThan200=characters.some(height=>height.height>200);
    // console.log(lessThan200);
// Is there at least one character that has mass less than 50?
    let massLessThan50=characters.some(less=>less.mass<50);
    // console.log(massLessThan50);




///     REDUCE() METHOD <3 



const input = [ 1, -4, 12, 0, -3, 29, -150];

let positive=input.filter(num=>num>0)
    .reduce((a,b)=>{
        return a+b
},0)
console.log(positive)




