//Day 7 Functions 
'use strict'
///FUNCTIONS

/* 
Functions
So far we have seen many builtin JavaScript functions. In this section, we will focus on custom functions. What is a function? Before we start making functions, lets understand what function is and why we need function?

A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

clean and easy to read
reusable
easy to test
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function





EXERCISES.... 
Exercises: Level 1
*/


//1.1) Declare a function fullName and it print out your full name.

// const fullname=()=>{
//     console.log('Arsen Akhalaia');
// }
// fullname()


//1.2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// const fullName = (firstName,lastName)=>{
//     return `${firstName} ${lastName}`;
// };
// console.log(fullName('arsen','akhalaia'))


//1.3) Declare a function addNumbers and it takes two two parameters and it returns sum.
// const addNumbers=(par1,par2)=>{
//     return par1+par2;
// }
// console.log(10+20);



//1.4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// const areaOfRectangle=(length,width)=>{
//     let area = length * width
//     return area;
// }
// console.log(areaOfRectangle(10,15));


//1.5) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// let perimeterOfRectangle=(length,width)=>{
//     let perimeter = 2*(length+width);
//     return (perimeter)
// }
// console.log(perimeterOfRectangle(10,15));


//1.6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// const volumeOfRectPrism=(length,width,hieght)=>{
//     let volume=length*width*hieght;
//     return volume
// }
// console.log(volumeOfRectPrism(10,10,10))



//1.7) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// const areaOfCircle=r=>{
//     let area = Math.PI * r * r;
//     return area;
// }

// console.log(areaOfCircle(10))



//1.8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// const Circumference = r =>{
//     let circum=2*Math.PI*r;
//     return circum;
// };
// console.log(Circumference(10));



//1.9) Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// const substance=(mass,volume)=>{
//     let destiny = mass/volume;
//     return destiny;
// }

// console.log(substance(20,10))




//1.10) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// speed = distance ÷ time
// const speed=(distance,time )=>{
//     let speeds = distance / time;
//     return speeds;
// }
// console.log(speed(2000,2))



//1.11)   Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// const weightFormula = (mass,gravity)=>{
//     let weight=mass*gravity;
//     return weight
// }   
// console.log(weightFormula(100, 9.81))



//1.12) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// const convertCelsiusToFahrenheit=oc=>(oc*9/5)+32;
// console.log(of(100));





//1.13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// bmi = weight(kg) / (height x height ) 
// const calculateBmi=(kg,height)=>{
//     let bmi = kg /(height * height);
//     console.log(bmi)
//     if(bmi<18.5){
//         return 'Underweight';
//     }else if(bmi>18.5 && bmi<24.9){
//         return 'Normal weight';
//     }else if(bmi>25 && bmi < 29.9){
//         return 'Overweight';
//     }else if(bmi>30){
//         return 'Obese';
//     }
    
// };

// console.log(calculateBmi(72,1.86));
// console.log(calculateBmi(80,1.80))




//1.14) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// const checkSeason=month=>{
//     let a = month.toLowerCase();
//     if(a==='january' && 'february'&& 'december'){
//         return 'Winter'
//     }else if(a==='march' && 'april' && 'may'){
//         return 'spring'
//     }else if(a==='june' && 'july' && 'august'){
//         return 'summer'
//     }else if(a==='september' && 'october' && 'november'){
//         return 'autumn';
//     }
// }

// console.log(checkSeason('january'));
// console.log(checkSeason('september'));
// console.log(checkSeason('april'))




//1.15) Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// const max=(num,num2,num3)=>{
//     const array=[num,num2,num3]
//     let max = 0 ;
//         for(let i=0; i<array.length; i++){
//             if(array[i]>max){
//                 max=array[i]
//             }
//         }
//         return max
// }
// console.log(max(10,20,30))
// console.log(max(3,2,1))
// console.log(max(3,5,1));






///Exercises 2: 

//2.3) Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// const printArray=arr=>{
//     arr.forEach(element => {
//         console.log(element);
//     });
// };
// printArray([1,2,3,4,5,'g'])




//2.4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object

// const showDateTime=()=>{
//     let date = new Date(1000)
//     console.log(date)
// }
// showDateTime();



//2.5) Declare a function name swapValues. This function swaps value of x to y.

// const swapValues=(a,b)=>{
//     [a,b]=[b,a];
//     return [a,b];
// }

// console.log(swapValues(2,3))
// console.log(swapValues(10,20));
// console.log(swapValues(1,100))



//2.6) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// const reverseArray=arr=>{
//     return arr.reverse()
// };

// console.log(reverseArray([1,2,3,4,5]));
// console.log(reverseArray(['A','B','C']));




//2.7) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// const capitalizeArray=arr=>{
//     let cap=[]
//     for(let i=0; i<arr.length; i++){
//         cap.push(arr[i].toUpperCase())
//     }
//     return cap
// }
// console.log(capitalizeArray(['arsen','akhalaia','gamarjoba']))

//second solution 
// const toUpper=arr=>arr.map(num=>num.toUpperCase());
// console.log(toUpper(['salami','gamarjoba','oeoeo','asdas','asdsadasddas']));





//2.8) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// const addItem=(array,add)=>{
//     const a=[...array];
//     a.push(add)
//     return a
// }
// console.log(addItem([1,2,3],4))


///2.9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// const removeItem=(array,remove)=>{
//     const arr=[...array];
//     const index=arr.indexOf(remove);
    
//     if(index > -1){
//         arr.splice(index,1);
//     }
//     return arr;
// }

// console.log(removeItem([1,2,3,4],4))




//2.10) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// const sumOfNumbers=(array,range)=>{
//     const arr=[...array];
//     arr.length=range+1;
//     let total=0;
//     for(let i =0; i<arr.length; i++){
//         total +=arr[i]
//     }
//     return total;
// }

// console.log(sumOfNumbers([1,2,3,4,5,6],3));
// console.log(sumOfNumbers([10,15,20,50,40,100,100,200,10],3));





//2.11) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// const sumOfOdds = (array, odd)=>{
//     let arr=[...array];
//     arr.length=odd+1;
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             max += arr[i];
//         }
//     }
//     return max;
// };

// console.log(sumOfOdds([1,2,3,3,3,3],4));





//2.12) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// const sumOfEven=(array,even)=>{
//     const arr = [...array];
//     arr.length=even+1;

//     let max=0;

//         for(let i=0; i<arr.length; i++){
//             if(arr[i]%2===0){
//                 max += arr[i]
//             }
//         }
//     return max;
// }

// console.log(sumOfEven([1,2,4,4],3))




//2.13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// const evensAndOdds=num=>{
//     let oddCounter=0
//     let evenCounter=0
//     for(let i=0; i<=num; i++){
//         if(i%2!==0){
//             oddCounter++
//         }else if(i%2===0){
//             evenCounter++
//         }
//     }
//     console.log(`The number of odds are ${oddCounter}`);
//     console.log(`The number of evens are ${evenCounter}`);
// };
// evensAndOdds(100);
// evensAndOdds(10000)





//2.14) Write a function which takes any number of arguments and return the sum of the arguments


// const sumoFArray=arr=>{
    
//     let total=0;
//     arr.forEach(num=>{
//         total += num;
//     })
//     return total
// }
// console.log(sumoFArray([1,2,3,4]));
// console.log(sumoFArray([1,2,3,4]))




///2.15) Writ a function which generates a randomUserIp.

// const randomIp=()=>{
//     var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
//     return ip 
// }
// console.log(randomIp())



//2.16) Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// const randomHexaNumberGenerator=()=>{
//     let letters ='1234567890ABCDEF';
//     let hex = '';
//     for(let i = 0 ; i<6; i++){
//         hex += letters.charAt(Math.floor(Math.random()*letters.length));
//     }
//     return '#'+hex
// }
// console.log(randomHexaNumberGenerator())




//2.17) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// const userIdGenerator=num=>{
//     let letters ='1234567890ABCDEFGHIKLMNOPK';
//     let userId=''
//     for(let i=0; i<num; i++){
//         userId += letters.charAt(Math.floor(Math.random()*letters.length));
//     }
//     return (userId)
// }

// console.log(userIdGenerator(10));
// console.log(userIdGenerator(4))




/// Exersises 3 :


//3.1) Write a function name rgbColorGenerator and it generates rgb colors.

// const rgbColorGenerator=()=>{
//     let first=Math.floor(Math.random()*257);
//     let second=Math.floor(Math.random()*257);
//     let third=Math.floor(Math.random()*257);
//     return `rgb(${first},${second},${third})`;
// }

// console.log(rgbColorGenerator())






//3.2) Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// const arrayOfHexaColors=(num)=>{
//             let letters ='1234567890ABCDEF';
//         let hex=''
//         for(let i=0;i<num;i++){
//             hex += letters.charAt(Math.floor(Math.random()*letters.length));
//         }
//         return '#'+hex
// }

// console.log(arrayOfHexaColors(10))
// console.log(arrayOfHexaColors(4));
// console.log(arrayOfHexaColors(6));






//3.3) Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors =(string, num)=>{

}




//3.4) Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// yvelaze mnishvnelovani 
// const shuffleArray=array=>{
//     let shuffle=new Set();
//     for(let i=0; i<array.length; i++){
//         while(shuffle.size!=4){
//         shuffle.add(array[Math.floor(Math.random()*array.length)]);
//             }
//     }
//     return Array.from(shuffle)
// }
// console.log(shuffleArray([1,2,3,4]));
// console.log(shuffleArray([1,2,8,9,33,09,11]));



//3.5) Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// const factorial=num=>{
//     let total=1;
//     for(let i=1; i<=num; i++){
//         total *= i;
//     }
//     return total;
// }
// console.log(factorial(10));
// console.log(factorial(5));
// console.log(factorial(8));






//3.6) Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// let varemptyArray = [];

// const isEmpty=arr=>{

// if (arr.length === 0) {
//     return 'The array is empty.'
// }
// else
// {
//     return 'The array has at least one or more elements.'
// }
// }
// console.log(isEmpty(varemptyArray))
// console.log(isEmpty([1,2,3]))
// console.log(isEmpty(1))



//3.7) Call your function sum, it takes any number of arguments and it returns the sum.
// const sum=(...all)=>{
//     let total=0;
//     for(let i=0; i<all.length;i++){
//         total += all[i]
//     }
//     return total
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(10,20,30));



//3.8) Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// const average = arr=>{
//     let total =0
//     for(let i=0; i<arr.length; i++){
//         if(typeof arr[i]==='number'){
//             total += arr[i];
//         }
//     }
//     return total / arr.length
// }
// console.log(average([1,2,3,4,2,3]))




//3.9) Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.





//3.10)Write a function which checks if all the items of the array are the same data type.

// const check=ar=>{
//         let  a = ar[0]
//         ar.forEach(num=>{
//             if(typeof num === typeof a ){
//                 return true;
//             }else{
//                 return false;
//             }
//         })
// }
// console.log(check([1,2,3,4,5]))
// console.log(check(['foo',1,true]))




//3.11) JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
// const variable=vari=>{
//     if(vari.startsWith('$') || vari.startsWith('_') || typeof vari.split('')[0]==='string'){
//         return 'isValid'
//     }else{
//         return 'invalid sheni deda sheveci'
//     }
// }
// console.log(variable('$asd'))
// console.log(variable('444'))



//3.12) Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// const random =()=>{
//     var set = new Set();
    
//     while(set.size!==7){
//         set.add(Math.floor(Math.random()*10))
//     }
//     return Array.from(set)
// }
// console.log(random())



//3.13) Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reversedCountries=ar=>{
    const a = [...ar];
    return a.reverse()
}
console.log(reversedCountries(['Georgia','moldova','armenia']))


