import { getData } from "./getData.js";
export class Router {
  constructor() {
    // this.url = window.location.href;
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
      console.log("cart");
    } else if (page === "checkout") {
      console.log("checkkout");
    } else if (page === "payment") {
      console.log("payment");
    } else if (page === "") {
      this.randomJSON();
    } else {
      console.log("Категория");
    }
  }

  randomJSON() {
    let rand = Math.floor(Math.random() * (2 - 1 + 1)) + 0;
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
}
