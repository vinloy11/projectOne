export class Cart {
    constructor(value) {
        this.value = value;
        this.arrayProducts = [];
        this.mainArrayProducts = [];
    }

    addItem(item) {
        this.value += Number(item.price);
        this.updateCartIcon(this.value);
        this.changeCartContents(item);
        this.saveProducts(this.arrayProducts)
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
        let location = document.querySelector('.content');
        let otherSection = location.querySelectorAll('section')[0];
        let templateCartPage = document.querySelector('#cart-page');
        let clone = document.importNode(templateCartPage.content, true);
        if (otherSection) {
            location.replaceChild(clone, otherSection);
        }else {
            location.appendChild(clone);
        }
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
                sum.textContent = product.price * product.quantity;
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
        if (e.target.type === 'text') {
            e.target.addEventListener('input', cartInstance.costCalculation)
        }
        if (e.target.dataset.reset) {
            let id = e.target.closest('.cart__tr').dataset.id;
            cartInstance.resetItem(id);
            e.target.closest('.cart__tr').remove();
        }
    }

    resetItem(id) {
        let deletedItem;
        let filtered = this.arrayProducts.filter(item => {
            if (parseInt(item.id) !== parseInt(id)) {
                return item;
            } else {
                deletedItem = item;
            }
        });
        this.value -= (deletedItem.price * deletedItem.quantity);
        this.arrayProducts = filtered;
        this.saveProducts(this.arrayProducts);
        this.totalCount();
        this.updateCartIcon(this.value)
    }

    saveProducts(products) {
        localStorage.setItem('products' ,JSON.stringify(products));
        localStorage.setItem('value', JSON.stringify(this.value));
    }

    loadCart() {
        if (!this.arrayProducts.length) {
            if (localStorage.length) {
                this.arrayProducts = JSON.parse(localStorage.getItem('products'));
                this.value = JSON.parse(localStorage.getItem('value'));
                this.updateCartIcon(this.value)
            }
        }
    }

    costCalculation() {
        if (Number(this.value)){
            let id = this.closest('.cart__tr').dataset.id;
            cartInstance.arrayProducts.forEach(product => {
                if (product.id == id) {
                    product.quantity = this.value;
                    let totalAmountProduct = this.value * product.price;
                    // cartInstance.value += totalAmount;
                    let totalAmount = 0;
                    cartInstance.arrayProducts.forEach(product => {
                        totalAmount += (product.price * parseInt(product.quantity))
                    });
                    cartInstance.value = totalAmount;
                    this.closest('tr').querySelector('.product__sum').textContent = totalAmountProduct;
                    cartInstance.saveProducts(cartInstance.arrayProducts);
                    cartInstance.totalCount();
                    cartInstance.updateCartIcon(cartInstance.value)
                }
            })
        }
    }

}