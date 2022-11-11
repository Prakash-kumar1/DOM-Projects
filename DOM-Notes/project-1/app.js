var form = document.getElementById('addForm') ;
var itemList = document.querySelector('#items') ;
var filter = document.getElementById('filter') ;

// Form submit event 
form.addEventListener('submit' , addItem) ;

// Delete event
itemList.addEventListener('click' , removeItem) ;

// Filter event
filter.addEventListener('keyup' , filterItems) ;

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


// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure !!')){
            var li = e.target.parentElement ;
            itemList.removeChild(li) ;
        }
    }
}


// Filter Items
function  filterItems(e){
    // convert text to lowerCase
    var text = e.target.value.toLowerCase() ;
    // get Li's
    var items = itemList.getElementsByTagName('li') ;
    // Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent ;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block' ;
        }else{
            item.style.display = 'none' ;
        }
    }) ;
}


















