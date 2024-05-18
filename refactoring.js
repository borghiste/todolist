let addButton = document.querySelector('#add-button');     
let inputField = document.querySelector('#todo-input');
let todoContainer = document.querySelector('#todo-list1');
let addList = document.querySelector('#add-list');
let maincontainer = document.querySelector('main');
let listInputfield = document.querySelector('#list-input');

addButton.addEventListener('click',(e)=>{let todotext =inputField.value;let createtodo =(todotext)=>{let newtodo= document.createElement('li');newtodo.textContent= todotext;console.log(todotext)
todoContainer.append(newtodo)};createtodo(todotext);
})