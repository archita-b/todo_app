const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const todoText = todoInput.value;

  if (todoText === "") {
    alert("You must write something!");
  } else {
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

    todoTextPara.addEventListener("click", function () {
      todoItem.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
      todoItem.remove();
    });

    todoList.appendChild(todoItem);

    todoInput.value = "";
  }
}
