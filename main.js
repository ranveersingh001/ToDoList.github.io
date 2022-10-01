// Take 3 variables
let addToDButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
 let inputField =document.getElementById('inputField');

 // Function to create a To do list 
 addToDButton.addEventListener('click', function(){
    // create list item
    var paragraph = document.createElement('li');
    // add css to list
    paragraph.classList.add('paragraph-styling');
    // input value from user
    paragraph.innerText = inputField.value;
    // add list item 
    toDoContainer.appendChild(paragraph);
    // after add item input will be blank
    inputField.value = "";
    //on click item line-through
    paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";     
    })
    // on double click item will remove item from list
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
 })