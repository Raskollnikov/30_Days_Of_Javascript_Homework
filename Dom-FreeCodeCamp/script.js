// Dom Manipulation 

// getting elements with different Selectors!!!

// GetElementById() - you can use this, method to select element By Id

// const title=document.getElementById('main-heading');
// console.log(title)

// GetElementByClassName() 

// const listItem=document.getElementsByClassName('list-items')
// console.log(listItem);

// GetElementByTagName()

// const tagName=document.getElementsByTagName('li')
// console.log(tagName)

// QuerySelector() - to Select an singee item, or first item

// const single=document.querySelector('.list-items')
// console.log(single)


// QuerySelectorAll() 

// const single=document.querySelectorAll('.list-items')
// console.log(single)

// getElementsByName()
// const test=document.getElementsByName('language')
// console.log(test)


//_______________________________________________________//



// Styling an Elements, Using Javascript!!! 

// const title=document.querySelector('#main-heading');

// title.style.color='red';


// const listItems=document.querySelectorAll('.list-items');

// listItems.forEach(list=>{
//     list.style.fontSize='20px';
// })






//_______________________________________________________//

//  Creating Elements Using Javascript



// Selecting Elements
// const ul = document.querySelector('ul');
// // Creating Elements
// const li=document.createElement('li');
// ul.append(li)

// const div=document.createElement('li')
// // Adding Classes On Elements
// li.className='list-items'
// div.setAttribute('class','list-items')
// // Giving TextContent On Items
// li.textContent='Data Tutashkhia!!!';
// div.textContent='Hello My Lover'
// //  Adding Elements As A Child!
// ul.appendChild(li);
// ul.appendChild(div)


// console.log(ul)



//_______________________________________________________//


// Modifying Elements Attributes & Classes


// li.textContent='testForAttributes'


// // To Set an attribute on li we Use SetAttribute() method for It
// li.setAttribute('class','list-items')
// li.classList.add('opa')
// li.classList.add('opana')

// // To remove an attribute on li we Use RemoveAttribute() method for It



// li.remove()

// console.log(li)




//_______________________________________________________//

// Dom Manipulation

// Traverse The Dom

//              Parent Node Traversal

// let ul=document.querySelector('ul');

// console.log(ul.parentElement.parentElement)
// console.log(ul.parentNode.parentNode)


// const html=document.documentElement;
// console.log(html.parentNode) //#document(Commonly Used!);
// console.log(html.parentElement) //Null

//              Child Node Traversal


// let ul=document.querySelector('ul');

// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.background='springGreen';
// ul.childNodes[1].style.color='#432f1a';

// console.log(ul.children)

// Sibling Node Traversal


// let ul=document.querySelector('ul');
// const div=document.querySelector('div');


// console.log(ul.nextSibling)





// Event Listeners  !Important 


// element.addEventListener('click',function());   //Click Event

// const buttonTwo=document.querySelector('.btn-2');


// // function alertBtn(){
// //     alert('I Love Javascript!!');
// // };

// // buttonTwo.addEventListener('click',alertBtn)


// //MouseOver


// const newBackground=document.querySelector('.btn-3');
// const all=document.querySelector('.box-3')

// newBackground.addEventListener('dblclick',()=>{
//     all.style.background='springGreen';
// })


// Saintereso Aghmochena!

// const text=document.querySelector('.text');
// const button=document.querySelector('.button')
// const box=document.querySelector('.box')

// button.addEventListener('click',()=>{
//     // text.style.display='none';
//     if (text.style.display === "none") {
//         text.style.display = "block";
//         box.style.height='500px';
//     }else{
//         text.style.display = "none";
//         box.style.height='120px';
//     }
// })







//Event propagation

// window.addEventListener('click',()=>{
//     console.log('gamarjoba!');
// },false)

// document.addEventListener('click',()=>{
//     console.log('This Is Document!')
// },false)
// document.querySelector('.propagation').addEventListener('click',()=>{
//     console.log('this inside 1 box')
// },false)
// document.querySelector('.test-propagation').addEventListener('click',()=>{
//     console.log('this is inside 2')
// },false)
// document.querySelector('.button-propagation').addEventListener('click',()=>{
//     console.log('this is Button')
// },false)