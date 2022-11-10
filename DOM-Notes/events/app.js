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

revealBtn.addEventListener('click' , revealBtn) ;


// ###@@@@@  Read From Technical suneja OR  you tube #####@@@

// Event  Propagation  Definition ==>>  when we click on button  {"Target"} ,  it will goto  div , after Div it will goto  body ,
//                                     after Body it will goto  HTML , after HTML it will goto  Document this is known as "Event Bubbling" ,
//  and when it returns from document to HTML -->> body -->> div -->> Button ,this is known as "Event Capturing" , this whole Propogation 
//  is known as Event  Propagation .          // Event  Propagation  has 3 phases 
                                              // First phase  =>>  Event  Capturing
                                              // Second phase  =>>  Target
                                              // Third phase  =>>  Event  Bubbling


































































