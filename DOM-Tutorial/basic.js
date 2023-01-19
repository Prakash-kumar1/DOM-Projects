// <!-- Question no:-1  what is DOM ??
// answer :-  The Document Object Model (DOM) is a programming interface for web documents. It represents the 
//            page so that programs can change the document structure, style, and content. The DOM represents
//             the document as nodes and objects; that way, programming languages can interact with the page.


// !!!@@@###$$$===>>>>>   select element using get element by id     <<<===!!!@@@###$$$===
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

//  !!!@@@###$$$===>>>>>  select element using query selector       <<<===!!!@@@###$$$===
const mainHeading1 = document.querySelector("#main-heading");
console.log(mainHeading1);

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);


//!!!@@@###$$$===>>>>>   Text Content :- using this property we get Text whatever written and also change the text.
const mainHeading2 = document.getElementById("main-heading");
console.log(mainHeading2.textContent);
// changing the text on UI
mainHeading2.textContent = "This is something else"
console.log(mainHeading2.textContent);


//!!!@@@###$$$===>>>>>   innerText :- using this property we get Text whatever written but we can't change the text.
const mainHeading3 = document.getElementById("main-heading");
console.log(mainHeading3.innerText);


//!!!@@@###$$$===>>>>>   Change the styles of elements
const mainHeading4 = document.querySelector("div.headline h2");
// console.log(mainHeading4.style);

mainHeading4.style.color = "red" ;
mainHeading4.style.border = "20px double yellow" ;
mainHeading4.style.backgroundColor = "blue" ;


//!!!@@@###$$$===>>>>>   get attribute
const link = document.querySelector("a") ;
console.log(link) ;
// for getting attribute value, we use getAttribute()
console.log(link.getAttribute("href")) ;

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


//!!!@@@###$$$===>>>>>   set attribute : using this property we can set the value
link.setAttribute("href", "https://codprog.com") ;
// let check it's change or not
console.log(link.getAttribute("href")) ;


// *********************************************************************************************************************************************************************************************

// get multiple elements using " getElements by class name "  and  " querySelectorAll "

// getElements by class name gives HTML collection 
const navItems = document.getElementsByClassName("nav-item")
console.log(navItems)

// querySelectorAll gives node List
const navItems1 = document.querySelectorAll("nav-item")
console.log(navItems1)

// <!-- Question no:-2  difference between nodelist and htmlcollection ??
// answer :-  HTMLCollection is a collection of document elements. A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
//            HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number.


// array like objects means you can use  "Indexing"  and  "Length property"


// !!!@@@###$$$===>>>>>  using For loop in DOM     <<<===!!!@@@###$$$===

// example-1
const navItems3 = document.getElementsByClassName("nav-item")
for(let i=0; i<navItems3.length; i++){
    console.log(navItems3[i]) ;

// storing in a variable, applying style on it
    const navItem = navItems[i] ;
    navItem.style.backgroundColor = "magenta" ;
}

// example-2
const todo = document.getElementsByClassName("todo-btn")
for(let i=0; i<todo.length; i++){
    console.log(todo[i]) ;

// storing in a variable, applying style on it
    const todoItem = todo[i] ;
    todoItem.style.backgroundColor = "black" ;
    todoItem.style.color = "gold" ;
    todoItem.style.fontWeight = "bold" ;
    todoItem.style.border = "5px dotted blue" ;
}

// OR i can also use For-of loop
for(let nav of navItems){
    console.log(nav)
}

for(let to of todo){
    console.log(to)
}


// *********************************************************************************************************************************************************************************************


// !!!@@@###$$$===>>>>>   innerHtML    !!!@@@###$$$===>>>>>  
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// // adding a new Button
// headline.innerHTML += "<button class= \"btn\"> using Inner html  </button>" 
// console.log(headline.innerHTML);



// *********************************************************************************************************************************************************************************************

