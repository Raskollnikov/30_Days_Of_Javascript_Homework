// Day 22
// Event Listeners


// Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event listener method to any DOM object. We use addEventListener() method to listen different event types on HTML elements. The addEventListener() method takes two arguments, an event listener and a callback function.


// selectedElement.addEventListener('eventlistner', function(e) {
// the activity you want to occur after the event will be in here
// })

// selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
// })


// Click

// To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

// The following is an example of click type event.

// Example: click


// <!DOCTYPE html>
/* <html>
    <body>
        <button>Click Me</button>

        <script>
        const button = document.querySelector('button')
        button.addEventListener('click', e => {
            console.log('e gives the event listener object:', e)
            console.log('e.target gives the selected element: ', e.target)
            console.log(
            'e.target.textContent gives content of selected element: ',
            e.target.textContent
            )
        })
        </script>
    </body>
</html> */

// By now you are familiar with addEventListen method and how to attach event listener. There are many types of event listeners. But in this challenge we will focus the most common important events. List of events:


// click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page




// Test the above event types by replacing event type in the above snippet code.

// Getting value from an input element
// We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

// nput event and change
// In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without click the button. We can use the change or input event type to get data right away from the input field when the field is on focus. Let us see how we will handle that.



// 🌕 You are so special, you are progressing everyday. Now, you knew how handle any kind of DOM events. . You are left with only seven days to your way to greatness. Now do some exercises for your brain and for your muscle.






// TEST 


// const test=document.querySelector('.test_click');
// const second=document.querySelector('.second_box');
// Click

// test.addEventListener('click',()=>{
//         console.log('gamarjoba');
// })


// dblclick

// test.addEventListener('dblclick',()=>{
//     window.alert('gamarjoba');
// })


// ________________________________ //


// mouseenter  when the mouse point enter to the element

// test.addEventListener('mouseenter',()=>{
//     test.style.background='red';
// })


// mouseleave - when the mouse pointer leave the element

// second.addEventListener('mouseleave',()=>{
//     second.style.background='black'
// })

// mousemove - when the mouse pointer move on the element

// test.addEventListener('mousemove',()=>{
//     test.style.background='orange'
// })




// mouseover - when the mouse pointer move on the element


// second.addEventListener('mouseover',()=>{
//     second.style.background='blue';
// })


// blur -when the element is not focused

// second.addEventListener('blur',()=>{
//     second.style.background='white';
// })



// keydown - when a key is down


// test.addEventListener('click',gamarjoba) 


// function gamarjoba(){
//     console.log('gamarjoba')
// }

// setTimeout(()=>{
//     test.removeEventListener('click',gamarjoba)
//     console.log(test.value)
// },2000)







// BMI Calculator   -   Getting value from an input element

// const mass = document.querySelector('#mass')
//       const height = document.querySelector('#height')
//       const button = document.querySelector('button')
      

// let BMI;

// button.addEventListener('click',()=>{
//   BMI = mass.value / (height.value ** 2)*10000
//   alert(`your BMI is ${BMI}`)
// });



