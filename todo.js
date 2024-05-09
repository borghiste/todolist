
let addButton = document.querySelector('#add-button');     
let inputField = document.querySelector('#todo-input');
let todoContainer = document.querySelector('#todo-list1');


// aggiungere click listener a addButton e al click creare un todo.

// al click su un <li> chiamare un listener per barrare i todo già fatti aggiungendo o rimuovendo la classe done.
// inserire pulsante CLOSE per ogni elemento <li> che elimina l'elemento <li> dalla lista.

/* Esempio classe: creiamo una classe per identificare l'intera lista di todo.
Questa classe avrà un costruttore a cui passeremo l'elemento del dom che fa da contenitore (variabile todoContainer).
Nel costruttore possiamo anche inserire i listeners per barrare i todo già fatti e quello per eliminare un todo dalla lista (possiamo richiamare dei metodi privati, come toggleDone() e removeTodo)
Serve un metodo per aggiungere un nuovo todo (passare il testo come parametro e scrivere la logica per creare un elemento LI nel dom)

suggerimenti per la classe:
  class TodoList 
  constructor(il contenitore <ul>) {aggiungo i listeners che richiamano dei metodi}
  addTodo(testo del todo)
  toggleDone(evento) {trovo il target dell'evento (l'elemento <li> che ho cliccato) e attivo/disattivo la sua classe 'done'}
  removeTodo(evento) {trovo il parent del pulsante che ho cliccato (quindi l'elemento <li> che contiene il button) e lo rimuovo dal DOM}

*/
  //  /aggiungo event listener al bottone che con l'evento click scatenerà la funzione  con la quale assegno alla variabile todotext l'input inserito nel campo input del html (input che possiede una classe che mi è servita per assegnare con il query selector, alla variavbile inputField, l'elemento input del html)
addButton.addEventListener('click', (e)=>{let todotext = inputField.value;


// invoco la funzione createtodo che ha argomento todotext all'interno della funzione senza bnome usata nell'event listener del button
createtodo(todotext);
})





// creo la funzione createtodo: che ha argomento todotext, assehna alla variabile todo il metodo createElement che a sua volta andrà a crere sul html l'elemento li.
//  sul newtodo uso la proprietà textContent  che inserirà del testo preso dalla variabile todotext
// successivamente alla variabile snewtodo che contiene il nuovo elemento li aggiungo il metodo append che andrà ad appendere li al suo parennte ul.
function createtodo(todotext){
  let newtodo = document.createElement('li');
   newtodo.textContent = todotext;
console.log(newtodo)
todoContainer.append(newtodo);
 newtodo.addEventListener('click',function() {newtodo.classList.toggle('done');
  
  })
let newclosebutton = document.createElement('button');
newclosebutton.textContent='X';
newclosebutton.classList.toggle("delete"); 
newtodo.append(newclosebutton);
newclosebutton.addEventListener('click',(e)=>{let newclosebuttondelete  = newtodo;
   newclosebuttondelete.remove();

  

})}