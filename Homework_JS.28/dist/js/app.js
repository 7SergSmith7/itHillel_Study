$(() => {
  new TodoController();
});

class TodoController {
  constructor() {
    this.$container = $(".todolist");
    this.listview = new TodoListView({
      onToggle: (id) => this.onToggle(id),
      onDelete: (id) => this.onDelete(id),
    });
    this.$container.append(this.listview.$el);
    this.formView = new TodoFormView({
      onAddTodoItem: () => this.onAddTodoItem(),
    });

    this.collection = new TodoCollection();

    this.collection.getList().then(() => {
      this.listview.render(this.collection.list);
      // console.log(this.collection.list)
    });
  }

  onToggle(id) {
    this.collection.toggle(id);
    this.listview.render(this.collection.list);
  }

  onDelete(id) {
    this.collection.delete(id);
    this.listview.render(this.collection.list);
  }
  onAddTodoItem() {
    const todoItem = {
      title: this.formView.$todoInput.val(),
      isDone: false,
    };

    this.formView.$todoInput.val("");
    this.collection
      .addTodoItem(todoItem)
      .then(() => {
        this.collection.getList();
      })
      .then(() => {
        this.listview.render(this.collection.list);
        // console.log(this.collection.list)
      });
    //this.$container.val("");
    //this.listview.render(this.collection.list);
    // console.log(this.collection.list)
  }
}

class TodoCollection {
  constructor() {
    this.list = [];
  }

  getList() {
    return fetch(TODOS_URL)
      .then((res) => res.json())
      .then((data) => (this.list = data));
  }

  toggle(id) {
    const todo = this.list.find((item) => item.id == id);
    todo.isDone = !todo.isDone;

    return fetch(`${TODOS_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  delete(id) {
    this.list = this.list.filter((item) => item.id != id);

    return fetch(`${TODOS_URL}/${id}`, {
      method: "DELETE",
    });
  }

  addTodoItem(todoItem) {
    return fetch(TODOS_URL, {
      method: "POST",
      body: JSON.stringify(todoItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const TODOS_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos";

class TodoFormView {
  constructor(config) {
    this.config = config;
    //   console.log(this.config);

    this.$addTaskBtn = $("#addTask");
    this.$todoInput = $("#input-task");
    this.initForm();
  }

  initForm() {
    this.$addTaskBtn.on("click", () => this.onAddTodoClick());
  }

  onAddTodoClick() {
    this.config.onAddTodoItem();
    // console.log(e.target);
  }
}

class TodoListView {
  constructor(config) {
    this.config = config;
    this.$el = this.initView();
  }

  initView() {
    return $(`<div id="taskList" class="task-list u-full-width"></div>`)
      .on("click", ".task-item", (e) => this.onItemClick(e))
      .on("click", ".delete-btn", (e) => this.onDeleteClick(e));
  }

  render(list) {
    this.$el.html(list.map(this.getTodoTemplate).join("\n"));
  }

  getTodoTemplate(todoItem) {
    return `<div class="task-item u-full-width ${
      todoItem.isDone ? "done" : ""
    }" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`;
  }

  onItemClick(e) {
    const id = $(e.target).data("todoId");
    this.config.onToggle(id);
  }

  onDeleteClick(e) {
    e.stopPropagation();
    const id = $(e.target).closest(".task-item").data("todoId");
    this.config.onDelete(id);
  }
}
