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
