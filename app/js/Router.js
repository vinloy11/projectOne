import { getData } from "./getData.js";
export class Router {
  constructor() {
    // this.url = window.location.href;
  }

  parseUrl(url) {
    url = url ? url : window.location.href;
    if (url.indexOf("#") !== -1) {
      let startPageName = url.indexOf("#");
      let page = url.slice(startPageName + 1);
      this.goTo(page);
    }
  }

  goTo(page) {
    if (page === "cart") {
      console.log("cart");
    } else if (page === "checkout") {
      console.log("checkkout");
    } else if (page === "payment") {
      console.log("payment");
    } else if (page === "") {
      getData("http://localhost:3000/data/products.json", "GET", function(
        data
      ) {
        generateRandomElements(data);
      });
    } else {
      console.log("Категория");
    }
  }
}
