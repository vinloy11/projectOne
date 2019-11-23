export function renderCongratulations() {
    let location = document.querySelector('.content');
    let checkoutTemplate = document.querySelector('#congratulations-page');
    let otherSection = location.querySelectorAll('section')[0];
    let clone = document.importNode(checkoutTemplate.content, true);
    if (otherSection) {
        location.replaceChild(clone, otherSection);
    }else {
        location.appendChild(clone)
    }
}