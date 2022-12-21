// Day 10  MAPS AND SETS 

// Set
// Set is a collection of elements. Set can only contains 
//unique elements.
//Let us see how to create a set in the section below.


// Creating an empty set
const companies = new Set([1,2,3,4,2,3,4])
console.log(companies)


// Creating set from array 
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)



// English
// Finnish
// French
// Spanish


//  _____________________________________  //
//  _____________________________________  //

// Adding an element to a set

const groups=new Set() // creating an empty set
console.log(groups.size) // 0
groups.add('google');
groups.add('facebook');
groups.add('yahoo');
groups.add('twitter');
groups.add('instagram');
// console.log(groups.size)
// console.log(groups)

// We can also use loop to add element to a set.

const testing =new Set()
for (const company of groups) {
    testing.add(company)
}
// console.log(testing);


// Deleting an element a set
// We can delete an element from a set using a delete method.
// console.log(testing.delete('google'))
// console.log(testing.size)



// Checking an element in the set
// The has method can help to know if a certain element exists in a set.

// console.log(companies.has('Apple')) // false
// console.log(companies.has('Facebook')) // true


// Clearing the set
// It removes all the elements from a set.

companies.clear()
// console.log(companies) // Set(0) {}



// Other use case of set. For instance to count unique item in an array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

// console.log(setOfNumbers)



// Union of sets

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let C = new Set(c)

// console.log(C)





//Map
// Creating an empty Map
const map = new Map()
console.log(map)


// Creating an Map from array
// countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)
// Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
// 3



// Adding values to the Map
// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)


// Getting a value from Map
// console.log(countriesMap.get('Finland'))
// Helsinki



// Exercises
// Exercises:Level 1

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway'];


//1.1) create an empty set
// let set=new Set();
//1.2) Create a set containing 0 to 10 using loop
// let tester=Array.from(set);

// for(let i=0;i<11;i++){
//     tester.push(i)
// }
// let arraySet=new Set(tester);
// console.log(arraySet);

//1.3) Remove an element from a set
// arraySet.delete(1)
// console.log(arraySet);
// //1.4) Clear a set
// arraySet.clear()
// console.log(arraySet);
//1.5) Create a set of 5 string elements from array
// let elements=['bacho','Akhalaia','arsen','the','champion'];
// let stringOf5=new Set(elements);
// console.log(stringOf5);
// 1.6) Create a map of countries and number of characters of a country
// let mapOfCountries=new Map([
//     [100,'moldova'],
//     [200,'romania'],
//     [400,'albania'],
//     [500,'Ukraine'],
//     [1000,'Georgia']
// ]);
// console.log(mapOfCountries);


// Exercises:Level 2
// 2.1) Find a union b
// let a=[1,2,3,4,5];
// let b=[4,5,8,9,10];
// let c=[...a,...b];
// let setOfC=new Set(c);
// console.log(setOfC);
//2.2) Find a intersection b
// let a=[1,2,3,4,5];
// let b=[2,3,4];
// let A=new Set(a);
// let B=new Set(b);

// let c=a.filter((num)=>B.has(num));
// let C=new Set(c);
// console.log(C)
