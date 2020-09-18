class Accordeon {
  static CONTENT_CLASS = "accordeon-content";
  static TITLE_CLASS = "accordeon-title";
  static VISIBLE_CLASS = "accordeon-visible";

  constructor(container) {
    this._container = container;
    this._prevElement;

    console.log("Accordeon started");

    this.bindClasses();
    this.bindEventListener();
  }

  bindClasses() {
    const contentElements = this._container.querySelectorAll(".content");

    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].classList.add(Accordeon.CONTENT_CLASS);
    }

    const titleElements = this._container.querySelectorAll(".title");
    for (let i = 0; i < titleElements.length; i++) {
      titleElements[i].classList.add(Accordeon.TITLE_CLASS);
    }
  }

  bindEventListener() {
    this._container.addEventListener("click", (event) => {
      if (event.target.classList.contains(Accordeon.TITLE_CLASS)) {
        this.toggleItem(event.target.parentNode);
      }
    });
  }

  toggleItem(selectedItem) {
    if (this.prevElement && selectedItem !== this.prevElement)
      if (this.prevElement.classList.contains(Accordeon.VISIBLE_CLASS)) {
        this.prevElement.classList.toggle(Accordeon.VISIBLE_CLASS);
      }

    selectedItem.classList.toggle(Accordeon.VISIBLE_CLASS);

    this.prevElement = selectedItem;
  }
}
