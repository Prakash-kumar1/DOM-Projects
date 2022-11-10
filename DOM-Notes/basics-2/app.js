// styling elements

const title = document.querySelector("#main-heading") ;
title.style.color = 'magenta' ;
title.style.wordSpacing = "2rem" ;


let listItems = document.querySelector('.list-items') ;
listItems.style.borderRadius = "10rem" ;
listItems.style.fontSize = "5rem" ;

// Query selector select only Ist element "The Matrix"  but for apply on each element
// we should use querySelectorAll  with for loop

listItems = document.querySelectorAll('.list-items') ;

for(i=0 ; i<listItems.length ; i++){
listItems[i].style.fontSize = "2rem" ;
}



// Creating elements

const ul = document.querySelector('ul') ;
const li = document.createElement('li') ;

// Adding Elements
ul.append(li) ;

// Modifying the text
const firstListItems =  document.querySelector('.list-items') ;
console.log(firstListItems.innerText) ;
console.log(firstListItems.textContent) ;
console.log(firstListItems.innerHTML) ;
console.log(firstListItems.innerText[2]) ;

// Adding New Element
li.innerText = "X-men : Apocalypse" ;

// Modifying Attributes and classes
li.setAttribute('class' , 'list-items') ;

// removing Attribute ("X-men : Apocalypse"  become normal)
li.removeAttribute('class') ;

let title1 = document.querySelector("#main-heading") ;
console.log(title1.getAttribute('id')) ;

const title2 = document.querySelector(".list-items") ;
console.log(title2.getAttribute('class')) ;
















































