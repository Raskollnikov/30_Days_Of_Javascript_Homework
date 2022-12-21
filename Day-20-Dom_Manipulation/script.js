// const lists = `<li>30DaysOfPython Challenge Done</li>
//         <li>30DaysOfJavaScript Challenge Ongoing</li>
//         <li>30DaysOfReact Challenge Coming</li>
//         <li>30DaysOfFullStack Challenge Coming</li>
//         <li>30DaysOfDataAnalysis Challenge Coming</li>
//         <li>30DaysOfReactNative Challenge Coming</li>
//         <li>30DaysOfMachineLearning Challenge Coming</li>`;


// const ul=document.querySelector('ul')


// ul.innerHTML=lists
// ul.style.listStyle='none'

// // ul.innerHTML=''



// let takeAll=document.querySelectorAll('.title');

// for(let i=0;i<takeAll.length;i++){
        // console.log(takeAll[i].textContent)
// }







// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element.
// Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.



let paragraph=document.querySelector('p')

// paragraph.className='para'
// paragraph.id='idOfpara'

// Adding attribute using setAttribute
// The setAttribute() method set any html attribute. It takes 
//two parameters the type of the attribute and the name of the attribute. 
//Let's add class and id attribute for the fourth title.

// paragraph.setAttribute('class','className')

// console.log(paragraph)




// Adding attribute without setAttribute
// We can use normal object setting method to set an attribute but this can not work for all elements.
// Some attributes are DOM object property and they can be set directly. For instance id and class

// paragraph.className='nameOfClass'
// paragraph.id='idName'
// console.log(paragraph)



// Adding class using classList
// The class list method is a good method to append additional class. It does not override 
//the original class if a class exists rather it adds additional class for the element.


// paragraph.classList.add('gamarjoba','salami','s','shemdegi')

// console.log(paragraph)


// Removing class using remove
// Similar to adding we can also remove class from an element. We can remove a specific class from an element

// paragraph.setAttribute('class','classNames')

// paragraph.classList.remove('classNames')
// console.log(paragraph)




// Adding Text to HTML element

// An HTML is a build block of an opening tag, a closing tag and a text content.
// We can add a text content using the property textContent or *innerHTML.
        // const ul = document.querySelector('ul')
        // ul.innerHTML = ''



// Exercise: Level 1

//1.1) Create an index.html file and put four p elements as above:Get the first paragraph by using
//  document.querySelector(tagname) and tag name

// let firstPara=document.querySelector('p');
// console.log(firstPara)


//
//1.2) Get each of the the paragraph using document.querySelector('#id') and by their id

// const para2=document.querySelector('#paragraph_id');

// console.log(para2)

//1.3) Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allTheParagraphs=document.querySelectorAll('p');
// console.log(allTheParagraphs[1]);
// console.log(allTheParagraphs[2]);
// console.log(allTheParagraphs[3]);

//1.4) Loop through the nodeList and get the text content of each paragraph
        // for(let i=0; i<allTheParagraphs.length; i++){
        //         console.log(allTheParagraphs[i])
        // }


//1.5) Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// allTheParagraphs[3].textContent='Fourth Paragraph'


//1.6)Set id and class attribute for all the paragraphs using different attribute setting methods

// allTheParagraphs[0].className='FirstClass';
// allTheParagraphs[1].setAttribute('class','secondClass');
// allTheParagraphs[2].setAttribute('class','thirdClass');
// allTheParagraphs[3].className='fourthClass'

// console.log(allTheParagraphs);


// allTheParagraphs.forEach(addClass=>{
//         addClass.className='testName'
// });
// console.log(allTheParagraphs)



// Exercise: Level 2
// 2.1) Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// allTheParagraphs.forEach(each=>{
//         each.style.color='red';
//         each.style.fontSize='30px'
//         each.style.background='springGreen';
//         each.style.margin='0'
//         each.style.textAlign='center'
//         each.style.padding='10px'
// })


// 2.2) Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red colorf

// allTheParagraphs.forEach((each,num)=>{
//         if(num%2!=0){
//                 each.style.color='green';
//         }else{
//                 each.style.color='red';
//         }
// });


// 2.3) Set text content, id and class to each paragraph

// allTheParagraphs.forEach(each=>{
//         each.textContent='Text Content For Each Element!';
//         each.setAttribute('id','idName');
//         each.setAttribute('class','className');
//         each.style.background='springGreen';
//         each.style.textAlign='center'
//         each.style.padding='10px'
// })



// Exercise: Level 3

// setTimeout(()=>{
//         document.body.style.background='springGreen'
// },3000)



// Exercise 3


//3.1
const body=document.querySelector('body')
body.style.display='flex'
body.style.justifyContent='center'
let wrapper=document.querySelector('.wrapper')
wrapper.style.marginTop='20px';

const header=document.querySelector('h1')
header.style.fontSize='25px';
header.style.letterSpacing='2px'
header.style.textAlign='center'

const colorFul=document.querySelector('.colorful')
colorFul.style.fontSize='75px'

let colorChanger=()=>{
        let colors=['red','green','blue','pink','springGreen','purple','orange','grey'];
        for(let i=0; i<colors.length; i++){
                colorFul.style.color=colors[Math.floor(Math.random()*colors.length-1)]
        }
}

setInterval(colorChanger,1000)

const underLine=document.querySelector('.underLine')
underLine.style.textAlign='center'
underLine.style.fontSize='20px'
underLine.style.color='#346'
underLine.style.textDecoration='underLine';


const ul=document.querySelector('ul')
ul.style.margin='50px'
const lies=document.querySelectorAll('li')

lies.forEach(li=>{
        li.style.background='#f74349';
        li.style.color='#000'
        li.style.padding='15px';
        li.style.marginTop='3px'
        li.style.fontSize='15px'
        li.style.width='700px'
})

const onlyYellow=document.querySelector('.yellow')
onlyYellow.style.background='yellow'
const onlyGreen=document.querySelector('.green')
onlyGreen.style.background='springGreen'