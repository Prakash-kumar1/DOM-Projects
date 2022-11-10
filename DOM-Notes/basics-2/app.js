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


// adding like a class
li.classList.add('list-items') ;
// removing from a class
li.classList.remove('list-items') ;


// ####### ==>  Also trying for IInd Div  <<==#########


// Creating elements

const ol = document.querySelector('ol') ;
const p = document.createElement('p') ;

// Adding Elements
ol.append(p) ;

// Modifying the text
const firstListItem =  document.querySelector('.list') ;
console.log(firstListItem.innerText) ;
console.log(firstListItem.textContent) ;
console.log(firstListItem.innerHTML) ;
console.log(firstListItem.innerText[2]) ;

// Adding New Element
p.innerText = "Brahmastra : Shiva" ;

// Modifying Attributes and classes
p.setAttribute('class' , 'list') ;


// removing Attribute ("X-men : Apocalypse"  become normal)
p.removeAttribute('class') ;

let title3 = document.querySelector("#main") ;
console.log(title3.getAttribute('id')) ;

const title4 = document.querySelector(".list") ;
console.log(title4.getAttribute('class')) ;


// adding like a class
p.classList.add('list') ;
// removing from a class
p.classList.remove('list') ;














































