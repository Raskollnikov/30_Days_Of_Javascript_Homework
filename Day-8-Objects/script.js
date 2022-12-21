//Day 8, Objects 


// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
// }

//   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//   //hasOwnProperty

// const copyPerson = Object.assign({}, person)



// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person))





// Exercises

// Exercises: Level 1


//1.1) Create an empty object called dog
// const dog={};
//1.2) Print the the dog object on the console
// console.log(dog)
//1.3) Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// const dog={
//     legs:4,
//     color:'brown',
//     age:27,
//     bark:function(){
//         return 'woof woof';
//     }
// };
//1.4) Get name, legs, color, age and bark value from the dog object
// console.log(dog.legs,dog.color,dog.age,dog.bark())
//1.5) Set new properties the dog object: breed, getDogInfo
// dog.breed="ujisho";
// dog.getDogInfo=functino(){
//     return 'this dog is very pretty'
// }





//Exercises: Level 2
const users = {
Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
},
Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
},
Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
},
Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
},
John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
},
Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
},
Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
}
}



//2.1) Find the person who has many skills in the users object.
const a = Object.values(users);

let max = ''
let array= []
for(let i =0;i<a.length; i++){

    if(a[i]['skills'].length>array.length){
        array.length = a[i]['skills'].length
    }
}
console.log(array.length)

//2.2) Count logged in users, count users having greater than equal to 50 points from the following object.
// const a = Object.values(users);
//     let bigger=[]
//     for(let i=0; i<a.length; i++){
//         if(a[i]['points']>=50){
//             bigger.push(a[i]['points']);
//         }
//     }
    
//     console.log(bigger.length+ 'users have more than or equal points <3 ')
// 2.3) Get all the values of users object
// console.log(Object.values(users))
//2.4) Set your name in the users object without modifying the original users object
// users.myName="Arsen";




