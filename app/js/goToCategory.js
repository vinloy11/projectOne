import {generateRandomElements} from './randomElements.js'

export function goToCategory(products) {
    let url = window.location.href;
    let startString = url.indexOf('#');
    if (startString !== -1) {
        let category = url.slice(startString + 1);
        products.forEach(function (item) {
            if (item.category === category) {
                generateRandomElements(item.products);
            }
        })
    }
}