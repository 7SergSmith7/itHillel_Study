const TODO_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";

const DELETE_BTN_CLASS = "delete-btn";
const ADD_BTN_CLASS = "add-ticket-btn";
const TEXTAREA_CLASS = "todo-item-input";

const addTodoTiketBtn = document.getElementById("add-ticket-btn");
const todoList = document.getElementById("todo-desk");
const todoItemTemplate = document.getElementById("todo-item-template")
  .innerHTML;

addTodoTiketBtn.addEventListener("click", onAddTiketBtnClick);
todoList.addEventListener("click", onTodoListClick);
todoList.addEventListener("blur", onTiketBlur, true);
let arrayTodoList = [];

init();

function onTiketBlur(e) {
  let tiketId = e.target.parentElement.dataset.id;
  console.log(e.target);
  switch (true) {
    case e.target.classList.contains(TEXTAREA_CLASS):
      let newDescription = e.target.value;
      console.log(newDescription);
      updateTiket(tiketId, newDescription);
  }
}

function updateTiket(id, description) {
  let todoItem = findTodoItem(id);
  todoItem.description = description;
  updateTiketOnServer(todoItem);
}

function updateTiketOnServer(todoItem) {
  fetch(TODO_URL + todoItem.id, {
    method: "PUT",
    body: JSON.stringify(todoItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getTodoList);
}
function findTodoItem(id) {
  return arrayTodoList.find((todoItem) => todoItem.id == id);
}
function onAddTiketBtnClick(e) {
  if (e.target.classList.contains(ADD_BTN_CLASS)) addTiket();
}

function onTodoListClick(e) {
  let tiketId = e.target.parentElement.dataset.id;

  switch (true) {
    case e.target.classList.contains(DELETE_BTN_CLASS):
      deleteTiket(tiketId);
  }
}

function init() {
  getTodoList();
}

function deleteTiket(id) {
  fetch(TODO_URL + id, {
    method: "DELETE",
  }).then(getTodoList);
}

function addTiket() {
  const todoItem = {
    description: "",
  };
  addTiketOnServer(todoItem);
}
function addTiketOnServer(todoItem) {
  fetch(TODO_URL, {
    method: "POST",
    body: JSON.stringify(todoItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getTodoList);
}

function getTodoList() {
  todoList.innerHTML = "";
  return fetch(TODO_URL)
    .then((res) => res.json())
    .then((data) => (arrayTodoList = data))
    .then(renderTodoList);
}

function renderTodoList() {
  arrayTodoList.forEach((todoItem) => renderTodoItem(todoItem));

  function renderTodoItem(todoItem) {
    const html = todoItemTemplate
      .replace("{{id}}", todoItem.id)
      .replace("{{inner}}", todoItem.description);
    todoList.insertAdjacentHTML("beforeend", html);
  }
}
