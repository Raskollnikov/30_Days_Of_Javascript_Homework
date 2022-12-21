
// Day 15

/*
Classes
JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties 
and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects.
We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object,
on the other hand, represents the class.

Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.


In the object section, we saw how to create an object literal.
Object literal is a singleton. If we want to get a similar object ,
we have to write it. However, class allows to create many objects.
This helps to reduce amount of code and repetition of code.


Defining a classes
To define a class in JavaScript we need the keyword class ,
the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.

class ClassName {
    //  code goes here
}


Class Instantiation
Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

Let us create a dog object from our Person class.

class Person {
  // code goes here
}
const person = new Person()
console.log(person)
Person {}
As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.

Let use the class constructor to pass different properties for the class.



Class Constructor
The constructor is a builtin function which allows as to create a blueprint for our
object. The constructor function starts with a keyword constructor followed by a parenthesis.
Inside the parenthesis we pass the properties of the object as parameter.
We use the this keyword to attach the constructor parameters with the class.


The following Person class constructor has firstName and lastName property. 
These properties are attached to the Person class using this keyword.
This refers to the class itself.

class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person = new Person()

console.log(person)
Person {firstName: undefined, lastName:undefined}

All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties.
Let us pass value at this time when we instantiate the class.


class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
Person {firstName: "Asabeneh", lastName: "Yetayeh"}

As we have stated at the very beginning that once we create a class we can create many object using the class.
Now, let us create many person objects using the Person class.


class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}

Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.

class Person {
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}

*/


// let userOne={
//     email:'bakhalaia56@gmail.com',
//     name:'Arsen',
//     login(){
//         console.log(this.email,'has logged in');
//     },
//     logout(){
//         console.log(this.email,'has logged out');
//     }
// };
// console.log(userOne.name)


            // The New KeyWord in Javascript 
// the 'new' keyword
// -crete a new empty object{}
// -sets the values of 'this' to be the new empty object 
// -cals the constructor method 








// class User{
//     constructor(email='bakhalaia56@gmail.com',name){
//         this.email=email;
//         this.name=name;
//         this.score=0;   
//     }
//     /// Methods inside Class 
//     login(){
//         console.log(this.email,'Has Logged In');
//         return this
//     }
//     logOut(){
//         console.log(this.email,'Has Logged Out');
//         return this
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email,'score is now',this.score);
//         return this
//     }
// };




// class Admin extends User{
//     deleteUser(user){
//         user=users.filter(u=>{
//             return u.email != u.email;
//         });
//     }
// }

// let userOne=new User('Arsen','Akhalaia');
// let userTwo=new User('Bacho','Akhalaia');
// let admin=new Admin('Arseni','Akhalaia')

// let users=[userOne,userTwo,admin];

// admin.deleteUser(userOne);

// console.log(userOne)





//  INHERITANCE
//  Main idea of Inheritance , is that for Example on this website we have 
//  users right we have as many users as you want, one hundred two hunder etc....
//  and they still have different methods and different properties <3
//  For example, on this website i want to create special kind of Users 
//  Which are admins right, and this admins will have some different methods associated
//  but This Admins Still are Users they're still going to have the same properties 
//  like email, score name etc.... and all the same Functions like logIn, logOut, 
//  however they're also can have extra methods, like ability to delete an User
//  And i don't want any User to be able to delete a user just like Admins 
//  So what we need to do really  is create a new admin class  with that methods inside 
//  it but problem is we want all this functionality for this Admin Class


//  we can create Admin class and Copy/paste all this funcionality inside this Class
//  amd add Extra Delete() method inside Admin Class 

// However this not the best way to do it, instead what we could do is use plus
// Inheritance, I would like to remind you that Adim is just like User, W extra Funcitionality(for Example, elete Method)



//So we Should write (Extand) after Admin class to Extand all this properties from User Class







/// Constructors 

// Constructor function



    // Normal way (old way solution);

// let baseSalar=40_500;
// let overTime=10;
// let rate=10;

// function getWage(baseSalar,overTime,rate){
//     return baseSalar+(overTime*rate);
// }



    // Better Way oop
// when we write oop, our method has not many methods 
// because we can pass arguments with 'this' keyword in it
// as Uncle bob says 
// The best Functions are those with no parameters!;



// OOP solution 

// let employee={
//     baseSalary:30_000,
//     overTime:10,
//     rate:20,
//     getWage(){
//         return this.baseSalary * (this.overTime+this.rate)
//     }
// };

// console.log(employee.getWage());





//      OBJECTS 

// const circle={
//     redius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw(){
//         console.log('draw');
//     }
// };


///// Constructor Function


// function Circle(radius){
//     console.log('this',this);
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     };
// }



// const another=new Circle(1);
// console.log(another);  




let x={};

// let x = new Object();
new String() // '', "", ``
new Boolean() // true, false
new Number() // 1,2,3,4,5,6...



//Functions Are Objects


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }
//     let user = new User("John");
//     user.sayHi();



//  They are same  With Class and With Prototype and function constructor 


// class User{
//     constructor(name,lastName,age,city){
//             this.name= name;
//             this.lastName= lastName;
//             this.age=age;
//             this.city=city;
//     }
//     login(){
//         console.log(`${this.name} ${this.lastName} has Joined`)
//     }
//     getFullName(){
//         console.log(`${this.name} ${this.lastName}`);
//     }
// }


// const user1=new User('bacho','Akhalaia',20,'Tbilisi');
// user1.login()
// user1.getFullName();



// Gaakete igive oghond Class gareshe 


// 1. create constructor for that 

// function Person(name,lastName,age,city){
//     this.name=name;
//     this.lastName=lastName;
//     this.age=age;
//     this.city=city;
// }

// Person.prototype.getFullName=function(){
//     return `${this.name} ${this.lastName}`
// }

// let person = new Person('Arsen','Akhalaia',20,'Tbilisi');

// console.log(person.getFullName());


/*
class Person{
        constructor(name,age){
        this.name=name;
        this.age=age;
    }
    welcome(){
        console.log(this.name,'Hello');
        console.log(this.age,'is your age');
    }
}


class Student extends Person{
    constructor(name,age,gpa){
        super(name,age)
        this.gpa=gpa;
    }
    hello()
        super.welcome();
        console.log(this.gpa,'is your gpa');
}
}


class Teatcher extends Person{
    constructor(name,age,classAmount){
        super(name,age)
        this.classAmount=classAmount;
    }
        hello(){
        super.welcome()
        console.log(this.classAmount,'is your classAmount');
        }
}

const student=new Student('Arsen',20,3.2);
student.welcome()
const teatcher=new Teatcher('manana',56,40);
console.log(teatcher)
teatcher.welcome()
*/

// Exercises
// Exercises Level 1
// 1.1) Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name,lastName,age){
            this.name=name;
            this.lastName=lastName;
            this.age=age;
    }
        woof(){
            return `${this.name} is ${this.age} years old!`
        }
        greeting(){
            return `hello i am ${this.dog}, and i am ${
                this.color
            }`
        }
}
// let animal=new Animal();
// console.log(animal.name)

// console.log(animal.woof())
// console.log(animal.greeting())


// 1.2) Create a Dog and Cat child class from the Animal Class.

// class Dog extends Animal{
//     costructor(name,lastName,age,saxeoba){
//             Super(name,lastName,age);
//             this.saxeoba=saxeoba;
//     }
//     yepa(){
//         console.log('Woof Woof');
//     }
// };
// let dog = new Dog('jeka','jekadze',5,'nagazi');
// dog.yepa()




// class Cat extends Animal{
//     constructor(name,lastName,age,food){
//         Super(name,lastName,age);
//         this.food=food;
//     }
//     dzili(){
//         console.log(true)
//     }
// }
// let cat = new Cat('fiso','fisodze',10,'milk');
// console.log(cat.dzili());





// Exercises Level 2
// Override the method you create in Animal class

// class Human extends Animal{
//     woof(){
//         return `Hello ${this.name}!`
//     }
// }



// let human=new Human('bacho','akhalaia',20);

// console.log(human);
// console.log(human.woof())



// Exercises Level 3


// Exercises Level 3
// Let's try to develop 
//a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
//You can create a class called Statistics and create all the functions which do statistical calculations as method 
//for the Statistics class. Check the output below.
/*
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]



ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];



class Statistic{
    constructor(array){
        this.array=array;
    };
    count(){
        return this.array.length;
    };
    sum(){
        return this.array.reduce((a,b)=>{
            return a+b
        },0);
    };
    min(){
        let min=this.array;
        return Math.min(...min)
    };
    max(){
        let max=this.array;
        return Math.max(...max);
    };
    range(){
        let min = Math.min(...this.array);
        let max = Math.max(...this.array);
        return max-min;
    };
    median(){
            let middle = Math.floor(this.array.length / 2);
            this.array=[...this.array].sort((a, b) => a - b);
    return this.array.length % 2 !== 0 ? this.array[middle] : (this.array[middle - 1] + this.array[middle]) / 2;
    }
}


let statistic=new Statistic(ages)
console.log(statistic.count())
console.log(statistic.sum())
console.log(statistic.min());
console.log(statistic.range())
console.log(statistic.median())
*/