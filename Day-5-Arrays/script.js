//Day 5 Arrays 
/*
In contrast to variables, an array can store multiple values.
Each value in an array has an index, and each index has a reference
in a memory address. Each value can be accessed by using their indexes.
The index of an array starts from zero, and the index of the last element
is less by one from the length of the array.

An array is a collection of different data types which are ordered
and changeable(modifiable). An array allows storing duplicate elements
and different data types. An array can
be empty, or it may have different data type values.
*/

// How to create an array with values

/* 
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
*/


///Accessing array items using index
//We access each element in an array using their index.
//An array index starts from 0.
//The picture below clearly shows the index of each element in the array.

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] 



/* 
Methods to manipulate array
There are different methods to manipulate an array.
These are some of the available methods to deal with 
arrays:Array, length, concat, indexOf, slice,
splice, join, toString, includes, lastIndexOf, isArray,
fill, push, pop, shift, unshift


//          FILL() 

const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]
*/





/*
/ let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
    console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
    console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array
*/




// Exercise: Level 1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]


//1) Declare an empty array;
let array = [];

//2) Declare an array with more than 5 number of elements
let five=[1,2,3,4,5];

//3) Find the length of your array
// console.log(five.length);

//4) Get the first item, the middle item and the last item of the array
// console.log(five[0]);
// console.log(five[Math.floor(five.length/2)]);
// console.log(five[five.length-1]);

//5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=['Arsen','Akhalaia',20,'Millionaire','New-York','Tbilisi'];

//6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

//7) Print the array using console.log()
console.log(itCompanies);

//8)Print the number of companies in the array
// console.log(itCompanies.length);

//9) Print the first company, middle and last company
// console.log(itCompanies[0],itCompanies[itCompanies.length-1],itCompanies[Math.floor(itCompanies.length/2)]);

//10) Print out each company
// itCompanies.forEach(com=>console.log(com));

//11) Change each company name to uppercase one by one and print them out
// itCompanies.forEach(com=>console.log(com.toLocaleUpperCase()));

//12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.join(', ') + ' are big IT companies')

//13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// itCompanies.includes('Amazon')?console.log('Amazon'):console.log('Not Found');

//14) Filter out companies which have more than one 'o' without the filter method

//15) Sort the array using sort() method
// console.log(itCompanies.sort());

//16) Reverse the array using reverse() method
// console.log(itCompanies.reverse());

//17) Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3));

//18) Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3))

//19) Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(2,-2));

//20) Remove the first IT company from the array
// console.log(itCompanies.shift());

//21) Remove the last IT company from the array
itCompanies.pop();

//22) Remove all IT companies
// itCompanies.length=0;






//      Exercise: Level 2

//2.1)Create a separate countries.
//js file and store the countries 
//array in to this file, create a separate file web_techs.js
//and store the webTechs array in to this file.
//Access both file in main.js file




//2.2)First remove all the punctuations and change the string 
//to array and count the number of words in the array
// let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// let words=text.split(' ');
// console.log(words);
// console.log(words.length);


//2.3) In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');
// shoppingCart.push('Sugar');
// shoppingCart.splice(3,1);
// shoppingCart[3]='Green Tea';
// console.log(shoppingCart)


//2.4) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let test4='Ethiopia'
// countries.includes('Ethiopia')?console.log(test4.toLocaleUpperCase()):countries.push(test4);


//2.5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// let sass='Sass';
// webTechs.includes(sass)?console.log('Sass is a CSS preprocess'):webTechs.push(sass);
// console.log(webTechs);

//2.6) Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// let fullStack=frontEnd.concat(backEnd);
// console.log(fullStack)



// EXERCISE: Level 3

//3.1) The following is an array of 10 students ages:
//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
let min=Math.min(...ages);
console.log(min);
let max=Math.max(...ages);
console.log(max)


//3.2) Find the average age(all items divided by number of items) 
// let total=0
// ages.forEach(num=>{
//     total += num;
    
// })
// console.log(total)
// console.log(total/ages.length +'this is average');

//3.3) Find the range of the ages(max minus min)
console.log('the range equals : ' + (max -min));








//3.2.1) Find the middle country(ies) in the country array

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

// console.log( countries.splice((countries.length/2)-5, 11))





//3.2.2 Divide the countries array into two equal arrays if it is even.
//if countries array is not even, one more country for first half 

countries.push('last country ')

countries.length%2==0?console.log(true):console.log(false)


let middle=Math.ceil(countries.length/2); 
const middleArray=countries.splice(0,middle);
const second=countries.splice(-middle);

console.log(middleArray);
console.log(second)


if(middleArray.length === second.length){
    console.log('2 toli arrray mivigeet <3 ');
}else{
    console.log('ragac shecdomaa sheni deda sheveci me ')
}

