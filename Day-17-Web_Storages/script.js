// Day 17
// HTML5 Web Storage

// Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies.
// Before HTML5, application data had to be stored in cookies, included in every server request.
// Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
// The data storage limit of cookies in many web browsers is about 4 KB per cookie.
// We Storages can store far larger data (at least 5MB) and never transferred to the server. 
// All sites from the same or one origin can store and access the same data.




//          The data being stored can be accessed using JavaScript, which gives you the ability to 
// leverage client-side scripting to do many things that have traditionally involved server-side 
// programming and relational databases. There are two Web Storage objects


// sessionStorage
// localStorage

// localStorage is similar to sessionStorage, except that while data stored 
// in localStorage has no expiration time, data stored in sessionStorage gets 
// cleared when the page session ends — that is, when the page is closed.

// It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.

// The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings)


// localStorage.setItem('name','Arsen');
// localStorage.setItem('lastName','Akhalaia');


// sessionStorage.setItem('name','Mathilda');
// sessionStorage.getItem('name');

// console.log(localStorage.key(0))

// let skills =['HTML','CSS','JS','React'];
// localStorage.setItem('skills',skills);
// localStorage.getItem('skills')
// console.log(localStorage.getItem('skills'));

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
console.log(localStorage.getItem('skills'));



/*
        Getting item from localStorage
    We get data from the local storage using localStorage.getItem() method.

//syntax
localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
    'Asabeneh', '200', '['HTML','CSS','JS','React']'

    As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.

let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
['HTML','CSS','JS','React']


Clearing the localStorage
The clear method, will clear everything stored in the local storage

localStorage.clear()
*/


// Exercises
// Exercises: Level 1

// 1.1) Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('name:','Arsen');
localStorage.setItem('lastName:','Akhalaia');
localStorage.setItem('age:',20);
localStorage.setItem('country:','Georgia');
localStorage.setItem('city:','Tbilisi');


// Exercises: Level 2
// 2.1) Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

// let student={
//     name:'Arsen',
//     lastName:'Akhalaia',
//     age:25,
//     skills:['HTML','CSS','Vue','React','Javascript','typeScript','Golang','mongoDb','express','React Native','Flutter','Node js'],
//     country:'Georgia'
// };

// let store = JSON.stringify(student);
// localStorage.setItem('aboutMe:',store);



