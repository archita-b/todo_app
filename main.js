const addButton = document.getElementById("addbutton");
addButton.addEventListener("click", addTodo);

const todos = [];

function addTodo() {
  const myInput = document.getElementById("myinput");
  if (myInput.value === "") {
    alert("You must write something");
  } else {
    const todoItem = createTodo(myInput.value);
    todos.push(todoItem);
    showTodos();
    myInput.value = "";
  }
}

function createTodo(todoText) {
  const todoObj = {};
  todoObj[checkbox] = false;
  todoObj[text] = todoText;
  return todoObj;
}

function showTodos() {
  const todoList = document.getElementById("todolist");
  todoList.textContent = "";

  for (let i = 0; i < todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "tododiv";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const todoText = document.createElement("p");

    const delButton = document.createElement("button");
    delButton.addEventListener("click", delTodo);
    delButton.className = "delbutton";

    delButton.textContent = "delete";
    todoText.textContent = todos[i];

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(todoText);
    todoDiv.appendChild(delButton);
    todoList.appendChild(todoDiv);
  }
}

// const delButton = document.getElementsByClassName("delbutton");
// delButton.addEventListener("click", delTodo);

function delTodo() {
  const myInput = document.getElementsByClassName("tododiv");
  todoDiv.textContent = "";
}
