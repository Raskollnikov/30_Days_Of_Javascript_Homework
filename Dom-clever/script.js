const redDiv=document.getElementById('red')
const yellowDiv=document.getElementById('yellow')
const greenDiv=document.getElementById('green')

// redDiv.onclick=()=>console.log('Red');
// yellowDiv.onclick=()=>console.log('Yellow');
// greenDiv.onclick=()=>console.log('green'); 

const squares=document.querySelectorAll('.colorSquare'); 


const timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square=>square.onclick=()=>{
    timesClicked[square.value] += 1
    square.innerText=timesClicked[square.value];
})


const zero=document.getElementById('resetScores');

let deleteScores=()=>{
        timesClicked.red=0
        timesClicked.yellow=0
        timesClicked.green=0
        squares.forEach(square=>{
            square.innerHTML=''
        })
}

zero.onclick=()=>deleteScores()