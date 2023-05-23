const todos = [];

function addTodo() {
  const myInput = document.getElementById("myinput");
  todos.push(myInput.value);
  showTodos();
  myInput.value = "";
}

function showTodos() {
  const todoList = document.getElementById("todolist");
  todoList.textContent = "";

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = todos[i];
    todoList.appendChild(listItem);
  }
}

const button = document.getElementById("addbutton");
button.addEventListener("click", addTodo);
