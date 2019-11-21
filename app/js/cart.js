export class Cart {
    constructor(value) {
        this.value = value;
        this.arrayProducts = [];
    }
    
    addItem(item) {
        // console.log(this.value + val)
        // console.log(item);
        this.value += parseInt(Number(item.price));
        // console.log(this.value);
        this.updateCartIcon(this.value);
        this.changeCartContents(item)
        // this.arrayProducts.push(item);
        // console.log(this.arrayProducts)
    }

    updateCartIcon(value) {
        let templateCart = document.querySelector('#cart');
        let span = templateCart.content.querySelector('[data-price-value]');
        span.textContent = value;
        let clone = document.importNode(templateCart.content, true);
        document.querySelector('.cart-wrapper').innerHTML = '';
        document.querySelector('.cart-wrapper').appendChild(clone)
    }

    changeCartContents(product) {
        // console.log(product);
        // let i = 0;
        if (this.arrayProducts.length !== 0) {
            let i = true;
            this.arrayProducts.forEach((key) => {
                if (key.id === product.id) {
                    key.quantity++
                    i = false;
                }
            });
            if (i) {
                product.quantity = 1;
                this.arrayProducts.push(product)
            }
        }else {
            product.quantity = 1;
            this.arrayProducts.push(product)
        }
        // console.log(this.arrayProducts)
    }

    renderCartTemplate() {
        console.log(this.arrayProducts)
    }
}