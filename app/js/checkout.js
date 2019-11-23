export function renderCheckout() {
    let location = document.querySelector('.content')
    let checkoutTemplate = document.querySelector('#checkout-page')
    let otherSection = location.querySelectorAll('section')[0];
    let clone = document.importNode(checkoutTemplate.content, true);
    if (otherSection) {
        location.replaceChild(clone, otherSection);
    }else {
        location.appendChild(clone)
    }
    // console.log('renderCheckout')
}
