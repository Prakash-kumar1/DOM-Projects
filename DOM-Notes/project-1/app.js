var form = document.getElementById('addForm') ;
var itemList = document.querySelector('#items') ;

// Form submit event 
form.addEventListener('submit' , addItem) ;

// Add item 
function addItem(e){
    e.preventDefault() ;

// Get Input value 
var newItem = document.getElementById('item') ;

// create new Li Element
let li = document.createElement('li') ;
// Add Class
li.className = 'list-group-item' ;
console.log(li) ;

}
























