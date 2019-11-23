export class RenderProducts {
  constructor() {
    this.location = document.querySelector(".content");
    this.elements = [];
  }

  renderProductsArray(elements) {
    this.renderWrapper();
    this.elements = elements;
    elements.forEach(element => {
      this.renderElement(element);
    });
  }

  renderWrapper() {
    let otherSection = this.location.querySelectorAll('section')[0];
    let templateHomePage = document.querySelector("#home-page");
    let clone = document.importNode(templateHomePage.content, true);
    if (otherSection) {
      this.location.replaceChild(clone, otherSection);
    }else {
      this.location.appendChild(clone)
    }
    this.location.addEventListener('click', this.addToCart)
  }

  renderElement(element) {
    let templateProduct = document.querySelector('#product');
    let content = templateProduct.content;
    let product = content.querySelector('.category-product');
    let image  = content.querySelector('.category-product__img');
    let price = content.querySelector('.category-product__price');
    let name = content.querySelector('.category-product__name');
    name.textContent = element.name;
    price.textContent = "$" + element.price;
    image.setAttribute('src', element.src);
    product.dataset.id = element.id;
    let clone = document.importNode(templateProduct.content, true);
    this.location.querySelector('.category-products').appendChild(clone)
  }

  addToCart(e) {
    if (e.target.dataset.add === 'true') {
      let id = parseInt(e.target.closest('.category-product').dataset.id);
      let products = getProducts.elements;
      products.forEach(product => {
        if (product.id === id) {
          cartInstance.addItem(product)
        }
      });
    }
  }



}
