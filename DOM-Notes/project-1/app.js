var form = document.getElementById('addForm') ;
var itemList = document.querySelector('#items') ;

// Form submit event 
form.addEventListener('submit' , addItem) ;

// Add item 
function addItem(e){
    e.preventDefault() ;

// Get Input value 
var newItem = document.getElementById('item').value ;

// create new Li Element
var li = document.createElement('li') ;
// Add Class
li.className = 'list-group-item' ;
// console.log(li) ;

// add text node with Input value
li.appendChild(document.createTextNode(newItem)) ;

// Create  Delete  button element
let deleteBtn = document.createElement('button') ;

// Add Classes to  Delete  button element
deleteBtn.className = 'btn btn-danger btn-sm float-right delete' 

// append text node
deleteBtn.appendChild(document.createTextNode('X')) ;

// Append button to Li
li.appendChild(deleteBtn) ;

// Append  li to List
itemList.appendChild(li) ;
}
























