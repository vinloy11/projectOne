import { toggleMenu } from "./toggleMenu.js";
import { Cart } from "./Cart.js";
import { Router } from "./Router.js";
import { RenderProducts } from "./RenderProducts.js";
import {getData} from "./getData.js";

window.route = new Router();
window.cartInstance = new Cart(0);
window.getProducts = new RenderProducts();

cartInstance.loadCart();
route.parseUrl();
window.addEventListener("hashchange", function() {
  route.parseUrl();
});

getData('http://localhost:3000/data/menuItems.json').then(categories => {
  toggleMenu(categories)
});


