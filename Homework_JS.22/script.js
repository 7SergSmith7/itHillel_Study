$(() => {
  const TODO_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/";

  const DELETE_BTN_CLASS = ".delete-btn";

  const TEXTAREA_CLASS = ".todo-item-input";

  // const todoList = document.getElementById("todo-desk");
  const $todolist = $("#todo-desk");
  //const todoItemTemplate = document.getElementById("todo-item-template")
  //  .innerHTML;
  const $todoItemTemplate = $("#todo-item-template").html();
  let arrayTodoList = [];
  let $todoList = $("#todo-desk");
  // let $todoItem = $(".todo-item");
  const $addTodoTiketBtn = $(".add-ticket-btn");

  $addTodoTiketBtn.on("click", onAddTiketBtnClick);
  $todoList.on("click", DELETE_BTN_CLASS, onTodoListClick);
  $todoList.on("blur", TEXTAREA_CLASS, onTiketBlur);

  init();

  function onTiketBlur() {
    let $tiketId = $(this).parent().data("id");

    let $newDescription = $(this).val();

    updateTiket($tiketId, $newDescription);
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
    });
  }
  function findTodoItem(id) {
    return arrayTodoList.find((todoItem) => todoItem.id == id);
  }
  function onAddTiketBtnClick() {
    addTiket();
  }

  function onTodoListClick() {
    let $tiketId = $(this).parent().data("id");
    $(this).parent().remove();
    deleteTiket($tiketId);
  }

  function init() {
    getTodoList();
  }

  function deleteTiket(id) {
    fetch(TODO_URL + id, {
      method: "DELETE",
    });
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
    $todoList.empty();
    return fetch(TODO_URL)
      .then((res) => res.json())
      .then((data) => (arrayTodoList = data))
      .then(renderTodoList);
  }

  function renderTodoList() {
    arrayTodoList.forEach((todoItem) => renderTodoItem(todoItem));
  }
  function renderTodoItem(todoItem) {
    const html = $todoItemTemplate
      .replace("{{id}}", todoItem.id)
      .replace("{{inner}}", todoItem.description);
    $(html).appendTo($todoList);
  }

  // function removeTodoItem(todoItem) {
  //    const html = $todoItemTemplate
  //     .replace("{{id}}", todoItem.id)
  //      .replace("{{inner}}", todoItem.description);
  //   console.log(html);
  //  console.log($todoList.html());
  //  $todoList.html().remove($(html));
  //}
});
