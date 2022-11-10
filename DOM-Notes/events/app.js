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

console.log(revealBtn.addEventListener('click' , revealContent)) ;


// ###@@@@@  Read From Technical suneja OR  you tube #####@@@

// Event  Propagation  Definition ==>>  when we click on button  {"Target"} ,  it will goto  div , after Div it will goto  body ,
//                                     after Body it will goto  HTML , after HTML it will goto  Document this is known as "Event Bubbling" ,
//  and when it returns from document to HTML -->> body -->> div -->> Button ,this is known as "Event Capturing" , this whole Propogation 
//  is known as Event  Propagation .          // Event  Propagation  has 3 phases 
                                              // First phase  =>>  Event  Capturing
                                              // Second phase  =>>  Target
                                              // Third phase  =>>  Event  Bubbling




// Event Delegation =>>  It allows users to append a Single Event Listener to a parent element that adds it to all of its present and future 
//                         descendants that match a Selector .

document.querySelector('#football').addEventListener('click' , function(e) {
console.log("Football is Clicked !!") ;

const target = e.target ;

if(target.matches('li')){
    target.style.backgroundColor = 'lightgrey' ;
}
})


document.querySelector('#boxing').addEventListener('click' , function(e) {
console.log("Boxing is Background Changed !!") ;

const target = e.target ;

if(target.matches('li')){
    target.style.backgroundColor = 'lightskyblue' ;
}
})


document.querySelector('#tennis').addEventListener('click' , function(e) {
console.log("Tennis is moved to Right Side !!") ;

const target = e.target ;

if(target.matches('li')){
    target.style.marginLeft = "17rem" ;
}
})


document.querySelector('#golf').addEventListener('click' , function(e) {
console.log("Golf is Removed !!") ;

const target = e.target ;

if(target.matches('li')){
    target.remove() ;
}
})


// using  getAttribute =>>

document.querySelector("#sports").addEventListener('click' , function(e){
    console.log(e.target.getAttribute('id') + "is clicked using Attributes")

// Removing all element
    const target = e.target ;
    
    if(target.matches('li')){
        // target.remove() ;
        // target.style.backgroundColor = 'lightcoral' ;
    }
}) ;

// Adding New Element
const sports = document.querySelector("#sports") ;
const newSport = document.createElement('li') ;

newSport.innerText = 'Hockey' ;
newSport.setAttribute('id' , 'Hockey') ;

sports.appendChild(newSport) ;
    
    








































