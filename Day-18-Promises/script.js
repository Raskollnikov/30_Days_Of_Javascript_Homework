// Day 18

// synchronous

// console.log(' I ')

// console.log(' eat ')

// console.log(' ice cream ')

// console.log(' with a ')

// console.log(' spoon ')


// Javascript Runs Top To Bottom! 
// IF Some Code Stucks, then entire process get Stuck!
// This is synchronous system! 

// console.log(' I ')

// console.log(' eat ')

// console.log(' spoon ')

// console.log(' ice cream ')

// console.log(' with a ')


/// Output Will be //// '' I eat spoon ice cream with a '' //
// because by default Javascript is synchronous, which means that 
// it  Runds Top to Bottom, Left To Right!







// Asynchronous



// console.log(' I ')

// console.log(' eat ')

// setTimeout(()=>{
//     console.log(' ice cream ')
// },4000);

// console.log(' with a ')

// console.log(' spoon ')


// 1000 milliSecond = 1Sec;

// function abc(a,b,c){}

// let  abcded=(a,b,c)=>{}







        // CALLBACKS 

// function one(call_two){
//     call_two();
//     console.log("step 1 complete. please call step 2");
// }


// function two(){
//     console.log("step 2");
// }

// one(two);


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open=false;

// let order=(Fruit_name, call_production)=>{

//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} Was Selected`);
//     },2000)
//     call_production(); 
// }

// let production=()=>{
    
//     setTimeout(()=>{
//         console.log('Production has started!')
//     },0000)
// };

// order(0,production);



// Promises



// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time)
//         }else{
//             reject(console.log('our shop is closed!'));
//         }
//     })
// };
// order(3000,()=>console.log(`${stocks.Fruits[0]} was selected!`))

// .then(()=>{
//     return order(0000,()=>console.log('Production has started!'));
// })

// .then(()=>{
//     return order(2000,()=>console.log('the fruit was chopped!'));
// })

// .then(()=>{
//     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected!`));

// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log('Start the machine ')
//     })
// })


// .then(()=>{
//     return order(2000,()=>{
//         console.log(`ice cream was placed on${stocks.holder[0]} `)
//     })
// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} was selected!`);
//     })
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log('ice cream was served')
//     }) 
// })


// .catch(()=>{
//     console.log('Customer left!');
// })

// .finally(()=>{
//     console.log('Day ended, shop is closed');
// })




//  Promises vs Async/await 



// 


// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(resolve,ms);
//         }else{
//             reject(console.log('shop is closed'));
//         }
//     });
// };
// async function kitchen(){
//     try{
//         await time(2000);
//         console.log(`${stocks.Fruits[0]}`)
//     }
//     catch(error){
//         console.log('')
//     }
//     finally{
//         console.log('day ended, shop is closed!');
//     }
// };

// kitchen();





// let topings_choice=()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(
//                     console.log('Which Topping would you love?')
//                 )
//             },3000)
//         });
// };



// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     await topings_choice();
//     console.log("D")
//     console.log("E")
// };

// kitchen();

// console.log('doing the dishes ');
// console.log('cleaning the table ');
// console.log('taking others orders');













//  _____________________________  //
//  _____________________________  //
//  _____________________________  //
//  _____________________________  //
//  _____________________________  //
//  _____________________________  //
//  _____________________________  //

// let p=new Promise((resolve,reject)=>{
//         let a=1+1;
//         if(a===2){
//             resolve('succes');
//         }else{
//             reject('failed')
//         };
// });


// p.then((message)=>{
//     console.log('This is in the then',message);
// }).catch((message)=>{
//     console.log("this is in the catch",message);
// });






// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     if(10>2){
//         resolve('10 metia 2ze')
//     }else{
//         reject('darejectda yvelaferi vafshe!');
//     }},2000)
// }).then((arg)=>console.log(arg)).catch(err=>console.log(err)).finally(()=>{
//     console.log('kodi romelic uechveli sruldeba')
// });


// function bacho(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//                 console.log('this is called')
//         },2000)
//     })
// }

// async function arsen(){
//     console.log('დაიბეჭდა');
//     let a = await bacho();
//     console.log(a)
// };

// arsen()


// setTimeout(function(){
//     console.log('gamarjoba')
//   },1000)


//   setTimeout(function(){
//     console.log('mixaki')
//   },2000)

//   setTimeout(function(){
//     console.log('koka kola')
//     setTimeout(function(){
//         console.log('INside koka kola')
//     },1000)
//   },2000)


const getButton=document.querySelector('#get');
const postButton=document.querySelector('#post');

const sendHttpRequest=(method,url,data)=>{
    return fetch(url).then(response=>{
        return response.json();
    })
    .then(responseData=>{
        console.log(responseData)
    })
}

const getData=()=>{
    fetch('https://reqres.in/api/users').then(response=>{
        return response.json();
    })
    .then(responseData=>{
        console.log(responseData)
    })
};

const sendData=()=>{
    fetch('https://reqres.in/api/users').then(response=>{
        return response.json();
    })
    .then(responseData=>{
        console.log(responseData)
    })
};

getButton.addEventListener('click',getData);
postButton.addEventListener('click',sendData);