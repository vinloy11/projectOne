// import { dich } from "./dich.js";
// import { generateRandomElements } from "./randomElements.js";
// import { toggleMenu } from "./toggleMenu.js";
// import { getData } from "./getData.js";
// import { goToCategory } from "./goToCategory.js";
// import { Cart } from "./cart.js";
// window.cartInstance = new Cart(0);
// dich();

// let jsonFile = require('../data')
// for (i = 0; i < 11; i++) {
//     jsonFile.writeFile('loop.json', "id :" + i + " square :" + i * i);
// }
// getData('http://localhost:3000/data/categoryProducts.json', 'GET', function (data) {
//     // toggleMenu(data)
//     console.log(data);
//     let id = 11;
//     data.forEach(function(category) {
//         category.products.forEach(function(product){
//             product.id = id;
//             id++
//         })
//     })
//     console.log(JSON.stringify(data))
//     // let newProducts = [];
//     // let id = 0;
//     // data.forEach(function(item){
//     //     item.id = id;
//     //     id++;
//     //     console.log(item);
//     // })
//     // console.log(JSON.stringify(data))
// });

// getData("http://localhost:3000/data/menuItems.json", "GET", function(data) {
//   toggleMenu(data);
// });

// window.addEventListener("hashchange", goToPage);
// goToPage();
// function goToPage() {
//   let url = window.location.href;
//   let startString = url.indexOf("#");
//   console.log(window.location.href);

//   if (startString !== -1) {
//     let page = url.slice(startString + 1);
//     if (page === "cart") {
//       cartInstance.renderCartTemplate();
//     } else {
//       getData(
//         "http://localhost:3000/data/categoryProducts.json",
//         "GET",
//         function(data) {
//           goToCategory(data);
//         }
//       );
//     }
//   } else {
//     getData("http://localhost:3000/data/products.json", "GET", function(data) {
//       generateRandomElements(data);
//     });
//   }
// }

// let value;
// let customPanel = document.querySelector(".custom-panel");
// customPanel.addEventListener("click", clickCustomPanel);

// function clickCustomPanel(e) {
//   let target = e.target;
//   let button = document.querySelector("[data-cart-button]");
//   let its_block = target === button || button.contains(target);
//   if (its_block) {
//     cartInstance.renderCartTemplate();
//   }
// }

// cartInstance.addItem({price: 4400});
// cartInstance.addItem({price: 200});

// setTimeout(function() {
//     console.log(arr)
//     // generateRandomElements(arr);
// }, 500)

// import { dich } from "./dich.js";
// import { generateRandomElements } from "./randomElements.js";
// import { toggleMenu } from "./toggleMenu.js";
// import { getData } from "./getData.js";
// import { goToCategory } from "./goToCategory.js";
import { Cart } from "./cart.js";
import { Router } from "./Router.js";
import { RenderProducts } from "./RenderProducts.js";

window.route = new Router();
window.cartInstance = new Cart(0);
window.getProducts = new RenderProducts();

route.parseUrl();
window.addEventListener("hashchange", function() {
  route.parseUrl();
});
