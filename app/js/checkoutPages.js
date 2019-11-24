let userDataArray = [];

export function renderPage(template) {
    let location = document.querySelector('.content');
    let checkoutTemplate = template;
    let otherSection = location.querySelectorAll('section')[0];
    let clone = document.importNode(checkoutTemplate.content, true);
    if (otherSection) {
        location.replaceChild(clone, otherSection);
    }else {
        location.appendChild(clone)
    }
    if (userDataArray.length) {
        userDataArray.forEach(obj => {
            if (obj.id) {
                let field = document.getElementById(obj.id);
                if (field) {
                    field.value = obj.value
                }
            }
        })
    }
}

export function checkoutFormEvents() {
    let pageCheckout = document.querySelector('.checkout');
    if (pageCheckout) {
        pageCheckout.addEventListener('click', clickCheckout)
    }
}

function clickCheckout(e) {
    if (e.target.classList) {
        e.target.classList.forEach(className => {
            if (className === 'input-text') {
                e.target.addEventListener('change', saveDataUser)
            } if (className === 'btn_pay') {
                cartInstance.clearCart()
            }
        })
    }
}

function saveDataUser(e) {
    let objData = {};
    objData.value = e.target.value;
    objData.id = e.target.id;
    userDataArray.push(objData);
}