var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
//To render the array of to-dos that are in the variable 'todos'
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears the todoList element;
  // Renders the number of to-dos on the list 
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // Goes through the to-do list, and creates an <li> for each to-do that it appends to the unordered list
  // Creates a 'Complete' button 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// On page load, pulls the data out of local storage, parses it, and calls the renderTodo function
function init() {
  // TODO: What is the purpose of the following line of code?
  // Retrieves the information from localStorage, parses it, and stores it in a variable 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // Checks whether the storedTodos variable is empty
  // If it's not, assignes the value of storedTodos to todos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // Calls the renderTodos function to render the to-dos the page 
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Stores the array of to-dos in local storage (after stringifying it)
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Adds an event listener listing for a 'submit' event to the todoForm
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if the form text is emplty, return the function
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // when you click submit, it pushes the to-do text into the todos array 
 // Clears the value of the input field
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  //updates local storage with the new value of todos 
  // makes the to-dos show up on the screen 
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// adds an event listener listening for a 'click' event to the todoList
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // makeing sure that the user clicked on a button 
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    //updates local storage with the new value of todos 
    // makes the to-dos show up on the screen 
    storeTodos();
    renderTodos();
  }
});

init();
