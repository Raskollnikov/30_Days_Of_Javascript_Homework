//DAY 6 LOOPS 
//Exercises: Level 1

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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']



//1.1) Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0; i<countries.length; i++){
//     console.log(countries[i]);
// };
// console.log('________________________');
// let i=0;

// while (i<countries.length){
//     console.log(countries[i]);
//     i++;
// }



//1.2) Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let i=countries.length-1; i>=0; i--){
//     console.log(countries[i])
// }


// let i=countries.length-1;

// while(i>=0){
//     console.log(countries[i]);
//     i--;
// }


//1.3) Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let count = 1;
// let x = "# ";
// for (a = 0; a<=5; a +=1){
//     console.log(x.repeat(count));
//     count +=1;
// }


//1.4) Use loop to print the following pattern:
/* 
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
// for(let i=0; i<=10; i++){
//     console.log(`${i} x ${i} = ${i*i}`) 
// }




//1.5 Use for loop to iterate from 0 to 100 and print only even numbers

// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         continue;
//     }
//         console.log(i)
// }


//1.6) Use for loop to iterate from 0 to 100 and print only odd numbers


// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i)
// }


//1.7) Using loop print the following pattern
/*
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
*/
// for(let i=0; i<=10; i++){
//     console.log(`${i} ${i*i} ${i**3}`)
// }


//1.8) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let total=0;
// for(let i=0; i<=100; i++){
//     total += i;
// }
// console.log('The sum of all numbers from 0 to 100 is '+total);


//1.9) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let totalOdd=0;
// let totalEven=0;

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         totalOdd +=i
//     }else if(i%2!==0){
//         totalEven +=i
//     }
// }
// console.log(totalOdd)
// console.log(totalEven)



//1.10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let totalOdd=0;
// let totalEven=0;

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         totalOdd +=i
//     }else if(i%2!==0){
//         totalEven +=i
//     }
// }
// console.log([totalOdd,totalEven])



//1.11) Develop a small script which generate array of 5 random numbers

// let array=[];

// for(let i=0; i <5; i++ ){
//     array.push(Math.floor(Math.random()*6))
// }
// console.log(array);


//1.12) Develop a small script which generate array of 5 random numbers and the numbers must be unique

// const nums = new Set();
// while(nums.size !== 5) {
//   nums.add(Math.floor(Math.random() * 5) + 1);
// }

// console.log([...nums]);


//1.13) Develop a small script which generate a six characters random id:

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


// const a = length=> {
//     let result='';
//     const lengthChar=characters.length;
//     for(let i = 0; i<length; i++){
//         result += characters.charAt(Math.floor(Math.random()*lengthChar))
//     }
//     return result
// }

// console.log(a(8))



//1.14) Develop a small script which generate any number of characters random id:

// const gocha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     let result ='';
//     const lengthofChars=gocha.length;

//     for(let i = 0; i < Math.floor(Math.random()*lengthofChars); i++){
//         result +=gocha.charAt(Math.floor(Math.random()*lengthofChars));
//     }
//     console.log(result)




//1.15) Write a script which generates a random hexadecimal number.


// let hex ='ABCDEF1234567890'

// let resultOfHex =''

// for(let i=0; i<6; i++){
//     resultOfHex += hex.charAt(Math.floor(Math.random()*hex.length));
// }
// console.log('#'+resultOfHex);



//1.16) Write a script which generates a random rgb color number

// let randomNum=Math.floor(Math.random()*256);
// let rand=Math.floor(Math.random()*256);
// let randThrid=Math.floor(Math.random()*256);
// console.log(`rgb(${randomNum},${rand},${randThrid})`);


//1.17) Using the above countries array, create the following new array.
//1.18) In above countries array, check if there is a country or countries 
//containing the word 'land'. If there are countries containing 'land',
//print it as array. If there is no country containing the word 'land', 
//print 'All these countries are without land'.
const countriesTest=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA",'ICELAND'];
// const land=[]

// for(let i=0; i<countriesTest.length; i++){
//     if(countriesTest[i].includes('LAND')){
//         land.push([countriesTest[i]]);
//     }
// }
// console.log(land)




// const countriesLength=[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
// const arrayOfMultiCountries=  [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ];

// let rand=[];

// arrayOfMultiCountries.forEach(num=>{
//     num.forEach(nums=>{
//             if(typeof nums==='string'){
//                 if(nums.endsWith('ia')){
//                     rand.push(nums)
//                 }
// }
//     })
// })

// console.log(rand)





//1.20) OUsing the above countries array, find the country containing the biggest number of characters.

// const arrayOfMultiCountries=  [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5],
// ];


// const longest = str=>{
//         let max = str[0];
//         for(let i=0; i<str.length; i++){
//             for(let j=0; j<str[i].length; j++){
//                 if(str[i][j].length>max.length){
//                     max=str[i][j]
//                 }
//             }
//         }
//             return max;
// }

// console.log(longest(arrayOfMultiCountries))






//1.21) Using the above countries array, find the country containing only 5 characters.

// let countries =  [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ]

// let fives = [];

// const five=array=>{
//     array.forEach(num=>{
//             num.forEach(nums=>{
//                 if(typeof nums==='string'){
//                     if(nums.length===5){
//                         fives.push(nums)
//                     }
//                 }
//             })
//     })
// return fives
// }

// console.log(five(countries))



//1.22) Find the longest word in the webTechs array
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ];

// let test = 0;
// let  a ;
//     for(let i=0; i<webTechs.length; i++){
//         if(webTechs[i].length>test){
//             test = webTechs[i].length
//             a=webTechs[i]
//         }
//     }
//     console.log(a)
//     console.log(test)




//1.23) Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// const ar = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];


// for(let i=0; i<ar.length; i++){
//     console.log(ar[i])
// }




//1.24) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// const  ar=  ['banana', 'orange', 'mango', 'lemon'] ;

// for(let i = ar.length-1; i>=0; i--){
//     console.log(ar[i])
// }




//1.25) Print all the elements of array as shown below.
/*  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/


// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ];

// fullStack.forEach(num=>{
//     num.forEach(nums=>{
//         console.log(nums);
//     });
// });






////////////// EXERCISES LEVEL 3


//3.1) Copy countries array(Avoid mutation) 
// let copyOfCountries=[...countries];
// console.log(copyOfCountries)


//3.2) Sort the webTechs array and mernStack array
// console.log(webTechs.sort())


//3.3) Extract all the countries contain the word 'land' from the countries array and print it as array
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

// let ar=[]
//     for(let i=0;i<countries.length;i++){
//         if(countries[i].includes('land')){
//             ar.push(countries[i])
//         }
//     }
    
// console.log(ar)




//Find the country containing the hightest number of characters in the countries array
//          same array countries 
// let max;

// for(let i=0;i<countries.length;i++){
//     let a=countries[0].length;
//     if(countries[i].length>a){
    
//         max=countries[i]
//     }
// }
// console.log(max + ' has larges amount of letters in it <3');







//3.4) Extract all the countries containing only four characters from the countries array and print it as array
// let fourLetter=[]
// for(let i=0; i<countries.length; i++){
//     if(countries[i].length===4){
//         fourLetter.push(countries[i])
//     }
// }
// console.log(fourLetter)


//3.5) Extract all the countries containing two or more words from the countries array and print it as array
//with filter 
// console.log(countries.filter(str=>str.includes(' ')))
//with for loop
// let multiWord=[]
// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes(' ')){
//             multiWord.push(countries[i])
//     }
// }
// console.log(multiWord);



// Reverse the countries array and capitalize each country and stored it as an array
// console.log(countries.reverse());