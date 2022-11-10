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
// For removing Element Completely
// li.remove() ;


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
// For removing Element Completely
p.remove() ;


// #######   DOM  Traversal  ###########

// Parent Node Traversal
let ul1 = document.querySelector('ul') ;
console.log(ul1.parentNode) ;
console.log(ul1.parentElement) ;

console.log(ul1.parentNode.parentNode) ;
console.log(ul1.parentElement.parentElement) ;

console.log(ul1.parentNode.parentNode.parentNode) ;
console.log(ul1.parentElement.parentElement.parentElement.parentElement) ;


const html = document.documentElement ;
console.log(html.parentNode) ;
console.log(html.parentElement) ;


// childNode property
let ol1 = document.querySelector('ol') ;
console.log(ol1.childNodes) ;
console.log(ol1.firstChild) ;
console.log(ol1.lastChild) ;


ol1.childNodes[5].style.backgroundColor = "orange" ;
ol1.childNodes[5].style.borderRadius = "9rem" ;
ul1.childNodes[7].style.backgroundColor = "gold" ;
ul1.childNodes[7].style.marginLeft = "7rem" ;
ul1.childNodes[5].style.borderRadius = "9rem" ;



//  children property
console.log(ol1.children) ;
console.log(ol1.firstElementChild) ;
console.log(ol1.lastElementChild) ;

console.log(ul1.children) ;
console.log(ul1.firstElementChild) ;
console.log(ul1.lastElementChild) ;


// Sibling Node Traversal

let ul2 = document.querySelector('ul') ;
const div = document.querySelector('div') ;

console.log(div.childNodes) ;

console.log(ul2.previousSibling) ;
console.log(ul2.nextSibling) ;


console.log(ul2.previousElementSibling) ;
console.log(ol1.previousElementSibling) ;

console.log(ul2.nextElementSibling) ;   //gives Null because no element after ul






