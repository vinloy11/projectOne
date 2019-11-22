export class Cart {
    constructor(value) {
        this.value = value;
        this.arrayProducts = [];
        this.mainArrayProducts = [];
    }

    addItem(item) {
        this.value += parseInt(Number(item.price));
        this.updateCartIcon(this.value);
        this.changeCartContents(item);
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
                    key.quantity++;
                    i = false;
                }
            });
            if (i) {
                product.quantity = 1;
                this.arrayProducts.push(product)
            }
        } else {
            product.quantity = 1;
            this.arrayProducts.push(product)
        }
    }

    renderCartTemplate() {
        let homeDecor = document.querySelector('[data-home-decor-section]'),
            homePage = document.querySelector('[data-home-page]');
        if (homeDecor && homePage) {
            homeDecor.classList.add('hidden');
            homePage.classList.add('hidden');
        }

        let templateCartPage = document.querySelector('#cart-page');
        let clone = document.importNode(templateCartPage.content, true);
        document.querySelector('.content').innerHTML = '';
        document.querySelector('.content').appendChild(clone);
        this.renderProducts();
        this.totalCount();
        this.productEvents();
    }

    renderProducts() {
        if (this.arrayProducts.length > 0) {
            this.arrayProducts.forEach((product) => {

                let templateCartItem = document.querySelector('#cart-item');
                let content = templateCartItem.content;
                let productWrapper = content.querySelector('.cart__tr');
                let image = content.querySelector('.product__image');
                let name = content.querySelector('.product__name');
                let price = content.querySelector('.product__price');
                let quantity = content.querySelector('.input-text');
                let sum = content.querySelector('.product__sum');
                productWrapper.setAttribute('data-id', product.id);
                image.setAttribute('src', product.src);
                name.textContent = product.name;
                price.textContent = product.price;
                quantity.setAttribute('placeholder', product.quantity);
                sum.textContent = (product.price * product.quantity);
                let clone = document.importNode(templateCartItem.content, true);
                document.querySelector('tbody').appendChild(clone)
            })
        }
    }

    totalCount() {
        document.querySelector('[data-subtotal]').innerHTML = '$' + this.value;
        document.querySelector('[data-total-amount]').innerHTML = '$' + (this.value + 5)
    }

    productEvents() {
        let cartTBody = document.querySelector('.cart__tbody');
        cartTBody.addEventListener('click', this.clickOnTheCart)
    }

    clickOnTheCart(e) {
        // console.log(e.target.dataset.reset)
        if (e.target.dataset.reset) {
            let id = e.target.closest('.cart__tr').dataset.id;
            cartInstance.resetItem(id);
            e.target.closest('.cart__tr').remove();
        }
    }

    resetItem(id) {
        console.log(id)
    }


}