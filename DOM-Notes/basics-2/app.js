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



















































