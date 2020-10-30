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
