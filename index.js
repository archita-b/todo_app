// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");
// const addBtn = document.getElementById("add-btn");
// addBtn.addEventListener("click", addTodo);

// function addTodo() {
//   const todoText = todoInput.value.trim();

//   if (todoText === "") {
//     alert("You must write something!");
//     return;
//   }
//   const todoItem = document.createElement("div");
//   todoItem.className = "todo-item";

//   const checkbox = document.createElement("input");
//   checkbox.setAttribute("type", "checkbox");
//   todoItem.appendChild(checkbox);

//   const todoTextPara = document.createElement("p");
//   todoTextPara.textContent = todoText;
//   todoItem.appendChild(todoTextPara);

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "delete";
//   todoItem.appendChild(deleteBtn);

//   checkbox.addEventListener("click", function () {
//     todoTextPara.classList.toggle("completed");
//     // saveTodo();
//   });

//   deleteBtn.addEventListener("click", function () {
//     todoItem.remove();
//     // saveTodo();
//   });

//   todoList.appendChild(todoItem);
//   // saveTodo();

//   todoInput.value = "";
// }

// // function saveTodo() {
// //   localStorage.setItem("todo", todoList.textContent);
// // }

// // function showTodo() {
// //   todoList.textContent = localStorage.getItem("todo");
// // }
// // showTodo();

const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", addTodo);

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText == "") {
    alert("You must write something!");
    return;
  }
  const todo = {
    id: Date.now(),
    name: todoText,
    checked: false,
  };
  todos.push(todo);
  saveToLocalStorage(todos);
  displayTodos();
  todoInput.value = "";
}

function displayTodos() {
  const todoText = todoInput.value.trim();
  todoList.textContent = "";

  todos.forEach((item) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    todoItem.appendChild(checkbox);

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = item.name;
    todoItem.appendChild(todoTextSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    todoItem.appendChild(deleteBtn);

    checkbox.addEventListener("click", function () {
      todoTextSpan.classList.toggle("completed");
      // console.log("before", checkbox.checked, "item", item.checked);
      // console.log("todos before", todos);
      item.checked = checkbox.checked;
      // console.log("todos after", todos);
      // console.log("item =", item.checked);
      // saveToLocalStorage();
    });

    deleteBtn.addEventListener("click", function () {
      todoItem.remove();
      todos = todos.filter((todo) => todo.id !== item.id);
      saveToLocalStorage();
    });

    todoList.appendChild(todoItem);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}

function getFromLocalStorage() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    displayTodos();
  }
}

getFromLocalStorage();
