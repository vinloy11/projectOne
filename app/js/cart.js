export class Cart {
    constructor(value) {
        this.value = value
    }
    
    addItem(item) {
        // console.log(this.value + val)
        this.value += item.price;
        console.log(this.value)
    }
}