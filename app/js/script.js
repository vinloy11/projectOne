import {dich} from './dich.js'
import {generateRandomElements} from './randomElements.js'
import {toggleMenu} from './toggleMenu.js';
import {getData} from './getData.js'
import {goToCategory} from "./goToCategory.js";
import {Cart} from "./cart.js"

dich();

getData('http://localhost:3000/data/menuItems.json', 'GET', function (data) {
    // console.log(data)
    toggleMenu(data)
});

let url = window.location.href;
let startString = url.indexOf('#');
if (startString !== -1) {
    getData('http://localhost:3000/data/categoryProducts.json', 'GET', function (data) {
        goToCategory(data)
    });
} else {
    getData('http://localhost:3000/data/products.json', 'GET', function (data) {
        generateRandomElements(data)
    });
}



let value;



window.cartInstance = new Cart(0)

cartInstance.addItem({price: 4400})
cartInstance.addItem({price: 200})


// setTimeout(function() {
//     console.log(arr)
//     // generateRandomElements(arr); 
// }, 500)


