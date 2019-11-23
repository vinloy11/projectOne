import { getData } from "./getData.js";
import * as checkout from "./checkout.js"
import * as payment from "./payment.js"
import * as congratulations from "./congratulations.js"
export class Router {
  constructor() {
  }

  parseUrl(url) {
    url = url ? url : window.location.href;
    let startPageName = url.indexOf("#");
    if (startPageName !== -1) {
      let page = url.slice(startPageName + 1);
      this.goTo(page);
    } else this.goTo("");
  }

  getDataProducts(url) {
    return getData(url);
  }

  goTo(page) {
    if (page === "cart") {
      this.goToCart()
    } else if (page === "checkout") {
      this.goToCheckout()
    } else if (page === "payment") {
      this.goToPayment()
    } else if (page === "congratulations") {
      this.goToCongratulations()
    }else if (page === "") {
      this.randomJSON()
    } else {
      this.goToCategory(page)
    }
  }

  randomJSON() {
    let rand = Math.floor(Math.random() * (2 - 1 + 1));
    if (rand === 1) {
      this.randomElements("http://localhost:3000/data/products.json");
    } else {
      this.randomElements("http://localhost:3000/data/products2.json");
    }
  }

  randomElements(url) {
    this.getDataProducts(url).then(products => {
      getProducts.renderProductsArray(products);
    });
  }

  goToCategory(category) {
    this.getDataProducts('http://localhost:3000/data/categoryProducts.json').then(products => {
        products.forEach(product => {
          if (product.category === category) {
            getProducts.renderProductsArray(product.products);
            if (document.querySelector('.li-inf')){
              document.querySelector('.li-inf').classList.add('hidden')
            }
          }
        })
    })
  }

  goToCart() {
    cartInstance.renderCartTemplate();
  }

  goToCheckout() {
    checkout.renderCheckout()
  }

  goToPayment() {
    payment.renderPayment()
  }

  goToCongratulations() {
    congratulations.renderCongratulations()
  }

}
