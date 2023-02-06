const choices = ['paper' ,'scissors' ,'rock' ];
const buttons = document.querySelectorAll('.pick');
let userChoice = undefined ;
let score = 0;
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user-select');
const computer_select = document.getElementById('computer-select');
const winner = document.getElementById('winner');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');



buttons.forEach ( (button) => {
    button.addEventListener('click' , () => {
    userChoice= button.getAttribute('data-choice');
    checkwinner();  
    });
});

reset.addEventListener('click' , () => {
  main.style.display = 'flex';
  selection.style.display = 'none'

});
openBtn.addEventListener('click' , () => {
  modal.style.display = 'flex';
  
});
closeBtn.addEventListener('click' , () => {
  modal.style.display = 'none';

});



function randomPickChoice (){
    return choices [(Math.floor(Math.random()*choices.length)) 
      
    ]};
    console.log(randomPickChoice());

      function checkwinner (){
        const conmputerChoice = randomPickChoice();
          uptadeSelection(user_select,userChoice);
          uptadeSelection(computer_select,conmputerChoice);
        // draw
        if(userChoice === conmputerChoice){
          winner.innerText = 'Draw';
        }
        else if 
          ( userChoice==='paper' && conmputerChoice==='rock' ||
            userChoice==='rock' && conmputerChoice==='scissors'||
            userChoice==='scissors' && conmputerChoice==='paper'  )
        {
                //user win
                updateScore(1);
                winner.innerText = 'Win';
        }else{
                //user lost
          winner.innerText ='Lose';
          updateScore(-1);

        }
        main.style.display = 'none';
        selection.style.display = 'flex'
        
      }
     function updateScore (value){
     score+= value
     scoreEl.innerText = score; 
     }

     function uptadeSelection (selectionEL , choice){
        selectionEL.classList.remove('btn-circle-paper');
        selectionEL.classList.remove('btn-circle-rock');
        selectionEL.classList.remove('btn-circle-scissors');

        const img = selectionEL.querySelector('img');
        selectionEL.classList.add(`btn-circle-${choice}`)
        img.src= `./images/icon-${choice}.svg`;
        img.alt = choice ;
     }
