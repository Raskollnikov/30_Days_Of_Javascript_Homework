// Day 22
// DOM(Document Object Model)-Day 2






//              Creating an Element

// To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.

// // syntax
// document.createElement('tagname')
// <!DOCTYPE html>
// <html>

// <head>
//     <title>Document Object Model:30 Days Of JavaScript</title>
// </head>

// <body>

//     <script>
//         let title = document.createElement('h1')
//         title.className = 'title'
//         title.style.fontSize = '24px'
//         title.textContent = 'Creating HTML element DOM Day 2'

//         console.log(title)
//     </script>
// </body>

// </html>



//                 Creating elements

// To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want. After we create the element we can assign value to the different properties of the HTML object.

// <!DOCTYPE html>
// <html>

// <head>
//     <title>Document Object Model:30 Days Of JavaScript</title>
// </head>

// <body>

//     <script>
//         let title
//         for (let i = 0; i < 3; i++) {
//             title = document.createElement('h1')
//             title.className = 'title'
//             title.style.fontSize = '24px'
//             title.textContent = i
//             console.log(title)
//         }
//     </script>
// </body>

// </html>


// let title
//         for (let i = 0; i < 3; i++) {
//             title = document.createElement('h1')
//             title.className = 'title'
//             title.style.fontSize = '24px'
//             title.textContent = i
//             console.log(title.value)
//         }






//          Appending child to a parent element

// To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using document.body. The document.body support the appendChild() method. See the example below.



// Removing a child element from a parent node

// After creating an HTML, we may want to remove element or elements and we can use the removeChild() method.



// Exercises: Level 1





let container=document.querySelector('.container')
let li=document.createElement('li')


        for (let i = 0; i < 100; i++){
            li.classList.add('test');
            container.append(li);
            console.log('\n')
            console.log(li.length);
        }

