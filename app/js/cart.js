export class Cart {
    constructor(value) {
        this.value = value;
        this.arrayProducts = [];
    }
    
    addItem(item) {
        // console.log(this.value + val)
        this.value += parseInt(Number(item.price));
        console.log(this.value);
        this.updateCart(this.value)
        this.arrayProducts.push(item)
        // console.log(this.arrayProducts)
    }

    updateCart(value) {
        let templateCart = document.querySelector('#cart');
        let span = templateCart.content.querySelector('[data-price-value]');
        span.textContent = value;
        let clone = document.importNode(templateCart.content, true);
        document.querySelector('.cart-wrapper').innerHTML = '';
        document.querySelector('.cart-wrapper').appendChild(clone)
    }





}