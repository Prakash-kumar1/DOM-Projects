// Event Listeners
// Syntax ==>>  element.addEventListener("click" , function) ;

const buttonTwo = document.querySelector('.btn-2') ;
function alertBtn() {
    alert("I am Lover of Javascript") ;
}

buttonTwo.addEventListener("click" , alertBtn) ;


// MouseOver Event
const newBackgroundColor = document.querySelector('.box-3') ;
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = "green" ;
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)



const revealBtn = document.querySelector('.reveal-btn') ;
const hiddenContent = document.querySelector('.hidden-content') ;

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else{
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click' , revealContent)































































