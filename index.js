const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("You must write something!");
    return;
  }
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  todoItem.appendChild(checkbox);

  const todoTextPara = document.createElement("p");
  todoTextPara.textContent = todoText;
  todoItem.appendChild(todoTextPara);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  todoItem.appendChild(deleteBtn);

  checkbox.addEventListener("click", function () {
    todoTextPara.classList.toggle("completed");
    // saveTodo();
  });

  deleteBtn.addEventListener("click", function () {
    todoItem.remove();
    // saveTodo();
  });

  todoList.appendChild(todoItem);
  // saveTodo();

  todoInput.value = "";
}

// function saveTodo() {
//   localStorage.setItem("todo", todoList.textContent);
// }

// function showTodo() {
//   todoList.textContent = localStorage.getItem("todo");
// }
// showTodo();
