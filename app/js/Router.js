import {getData} from "./getData.js";
import {renderPage, checkoutFormEvents} from "./checkoutPages.js"

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
            this.checkoutPage();
        } else if (page === "payment") {
           this.paymentPage(page);
        } else if (page === "congratulations") {
            this.goToCheckout(document.querySelector('#congratulations-page'), 1);
        } else if (page === "") {
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
                    if (document.querySelector('.li-inf')) {
                        document.querySelector('.li-inf').classList.add('hidden')
                    }
                }
            })
        })
    }

    goToCart() {
        cartInstance.renderCartTemplate();
    }

    goToCheckout(element, bool, page) {
        if (bool) {
            // document.querySelector('body')
            let body = document.querySelector('body');
            let loader = document.querySelector('[data-loader]');
            body.classList.add('overflow-hidden');
            loader.classList.remove('hidden');
            let load = new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            });
            load.then(() => {
                renderPage(element);
                checkoutFormEvents();
                if (page) {
                    cartInstance.renderSmallCart();
                }
                loader.classList.add('hidden')
                body.classList.remove('overflow-hidden')
            })
        } else {
            renderPage(element);
            checkoutFormEvents()
        }
    }

    checkoutPage() {
        if (cartInstance.getCartProduct()) {
            this.goToCheckout(document.querySelector('#checkout-page'))
        } else {
            this.randomJSON();
        }
    }

    paymentPage(page) {
        if (cartInstance.getCartProduct()) {
            this.goToCheckout(document.querySelector('#payment-page'), 1, page);
        } else {
            this.randomJSON()
        }
    }

}
