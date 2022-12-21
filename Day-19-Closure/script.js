//Day 19 Closures 


// Closure

// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

// 1
// 2
// 3









// Let us more example of inner functions

// function outerFunction() {
//     let count = 0;
//     function plusOne() {
//         count++
//         return count
//     }
//     function minusOne() {
//         count--
//         return count
//     }

//     return {
//         plusOne:plusOne(),
//         minusOne:minusOne()
//     }
// }
// const innerFuncs = outerFunction()

// console.log(innerFuncs.plusOne)
// console.log(innerFuncs.minusOne)
// 1
// 0

// A closure is the combination of a function bundled
// together (enclosed) with references to its surrounding
// state (the lexical environment). In other words, a closure
// gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.
// Exercises



// function inBetween(a, b) {
//     return function(x) {
//       return x >= a && x <= b;
//     };
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   alert( arr.filter(inBetween(2, 6)) ); // 3,4,5,6
  



// EXERCISES

// 1.1 Create a closure which has one inner function


// function outer(){
//     let myName='Arsen'

//         function innerFunction(){
//             console.log(myName);
//         }
//     innerFunction();
// }

// outer();





// 1.2 Create a closure which has three inner functions


// function outer(){
//     function innerOne(){
//         console.log('From First Function!')
//     }
//     function innerTwo(){
//         console.log('From Second Fucntion')
//     }
//     function innerThree(){
//         console.log('From third Fucntion')
//     }
//     innerOne()
//     innerTwo()
//     innerThree()
// }
// outer()





/// 1.3 Real Testing Of Closures



let a=10
let b=20

function outer(){
    function firstDepth(){
        console.log('from First')
            function secondDepth(){
                console.log('From Second Depth')
                    
                    function sum(){
                        console.log(a+b)
                    }
                    sum()
            }
            secondDepth()
    }
    firstDepth()
}
outer()