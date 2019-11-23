export class RenderProducts {
  constructor() {
    this.arrayProducts = [];
    this.location = document.querySelector(".content");
  }

  renderProductsArray(elements) {
    // console.log(elements);
    this.renderWrapper();
    elements.forEach(element => {
      this.renderElement(element);
    });
  }

  renderWrapper() {
    let templateHomePage = document.querySelector("#home-page");
    let clone = document.importNode(templateHomePage.content, true);
    this.location.appendChild(clone);
  }

  renderElement(element) {
    console.log(element);
  }

  getElement() {}
}
