import {dich} from './dich.js'
import {generateRandomElements} from './randomElements.js'
import {toggleMenu} from './toggleMenu.js';
import {getData} from './getData.js'
dich();
// toggleMenu.toggleMenu();



getData('http://localhost:3000/data/products.json', 'GET', function(data) {
    // console.log('getData result = ' + data)
    generateRandomElements(data)
    
});

getData('http://localhost:3000/data/menuItems.json', 'GET', function(data) {
    // console.log(data)
    toggleMenu(data)
    
});


// setTimeout(function() {
//     console.log(arr)
//     // generateRandomElements(arr); 
// }, 500)


