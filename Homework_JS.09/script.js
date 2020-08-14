const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todolist");

addTask.addEventListener("click", onAddTaskClick);

function onAddTaskClick() {
  let todoListInput = document.getElementById("input-task").value;
  if (todoListInput) {
    todoList.innerHTML += `<li>${todoListInput}</li>`;

    document.getElementById("input-task").value = "";
  }
}
