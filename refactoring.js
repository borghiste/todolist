let addButton = document.querySelector('#add-button');     
let inputField = document.querySelector('#todo-input');
let todoContainer = document.querySelector('#todo-list1');
let addList = document.querySelector('#add-list');
let maincontainer = document.querySelector('main');
let listInputfield = document.querySelector('#list-input');
// listener su addbutton che attiva funzione di creazione todo e creazione closebutton con  
addButton.addEventListener('click',()=>{let todotext =inputField.value;let createtodo =(todotext)=>{let newtodo= document.createElement('li');newtodo.textContent= todotext;console.log(todotext)
todoContainer.append(newtodo);let newclosebutton = document.createElement('button');newtodo.append(newclosebutton);newclosebutton.textContent='X';newclosebutton.classList.add('delete'); newclosebutton.addEventListener('click', ()=> {let newclosebuttondelete = newtodo; neewtodo.remove()})
}
// invoco la funzione di creazione todo
createtodo(todotext);
// event listener sul click del close button che invoca la funzione di cancellazione todo
})
