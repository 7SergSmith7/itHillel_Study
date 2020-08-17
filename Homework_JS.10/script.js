const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todolist");
const taskInput = document.getElementById("input-task");

addTask.addEventListener("click", onAddTaskClick);
todoList.addEventListener("click", onTaskClick);
todoList.addEventListener("click", onRemoveClick);

function onRemoveClick(e) {
  if (e.target.classList.contains("remove")) e.target.parentNode.remove(this);
}
function onTaskClick(e) {
  if (e.target.classList.contains("todolist__task"))
    e.target.classList.toggle("done");
}

function onAddTaskClick() {
  if (taskInput.value) {
    addNewTask(taskInput.value);
    clearInput();
  }
}

function addNewTask(newTask) {
  const li = document.createElement("li");
  li.className = "todolist__task toDo";
  li.textContent = "— " + newTask;
  addRemove(li);
  todoList.append(li);
}

function addRemove(taskEl) {
  const span = document.createElement("span");
  span.className = "remove";
  span.textContent = "х";
  taskEl.append(span);
}

function clearInput() {
  taskInput.value = "";
}
