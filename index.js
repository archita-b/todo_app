let todos = [];

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const addBtn = document.querySelector("#add-btn");
addBtn.onclick = () => addTodo();

function addTodo() {
  const todoInput = document.querySelector(".todoInput");
  const todoText = todoInput.value.trim();
  if (todoText == "") {
    alert("You must write something!");
    return;
  }
  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };
  todos.push(todo);
  todoInput.value = "";
  saveToLocalStorage();
  displayTodos();
}

function displayTodos() {
  const todoList = document.querySelector("#todoList");
  todoList.textContent = "";

  todos.forEach((todo, id) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    checkbox.onclick = () => toggleCompleted(id);
    todoItem.appendChild(checkbox);

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todo.text;
    if (todo.completed) {
      todoTextSpan.classList.add("completed");
    }
    todoItem.appendChild(todoTextSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "\u00d7";
    deleteBtn.onclick = () => deleteTodo(id);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });
}

displayTodos();

function toggleCompleted(id) {
  todos[id].completed = !todos[id].completed;
  saveToLocalStorage();
  displayTodos();
}

function deleteTodo(id) {
  todos.splice(id, 1);
  saveToLocalStorage();
  displayTodos();
}
