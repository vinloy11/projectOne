let arrRadioButtonsPayment = document.querySelectorAll("[data-radio-payment]"),
    arrTextInputsPayment,
    processToCheckout = document.querySelector("[data-process-to-checkout]"),
    form,
    mainBlocks = document.querySelectorAll("[data-main-block]"),
    checkoutSection = document.querySelector("[data-checkout-section]"),
    backToCart = document.querySelector("[data-back-to-cart]"),
    shippingAddress = document.querySelector("[data-shipping-address]"),
    payment = document.querySelector("[data-payment]"),
    buttonBackToShipping = document.querySelector("[data-back-to-shipping]"),
    buttonPay = document.querySelector("[data-button-pay]"),
    buttonNext = document.querySelector("[data-next-page]"),
    lastBlock = document.querySelector("[data-last-block]"),
    backToShopping = document.querySelector("[data-back-to-shopping]"),
    breadCrumbs = document.querySelector("[data-bread-crumbs]"),
    breadCrumbCart = document.querySelector("[data-active-bread]"),
    modal = document.querySelector("[data-modal]"),
    btnLogin = document.querySelector("[data-login]"),
    closeModalEl = document.querySelector("[data-modal-close]"),
    backgroundWin = document.querySelector("[data-background]"),
    homeDecorLi = document.querySelector("[data-home-decor-li]"),
    homeDecorItem = document.querySelector("[data-home-decor-item]"),
    liInfBlock = document.querySelector("[data-li-inf]");

document.addEventListener("click", e => {
    let target = e.target;
    let its_infBlock = target == liInfBlock || liInfBlock.contains(target);
    let its_decorLi = target == homeDecorLi || homeDecorLi.contains(target);
    if (!its_infBlock && !its_decorLi) {
        liInfBlock.classList.add("hidden");
    }
});

window.addEventListener("DOMContentLoaded", function () {
    homeDecorLi.addEventListener("click", function () {
        liInfBlock.classList.contains("hidden")
            ? liInfBlock.classList.remove("hidden")
            : liInfBlock.classList.add("hidden");
    });

    closeModalEl.addEventListener("click", function () {
        closedModal();
    });

    backgroundWin.addEventListener("click", function () {
        closedModal();
    });

    btnLogin.addEventListener("click", function () {
        modal.classList.remove("hidden");
        document.querySelector("body").classList.add("open-modal");
        document.querySelector("[data-background]").classList.remove("hidden");
    });

    // breadCrumbCart.addEventListener("click", function(e) {
    //   e.preventDefault();
    //   showMainBlock();
    // });
    //
    // backToShopping.addEventListener("click", function() {
    //   showMainBlock();
    //   scrollTop();
    // });
    //
    // buttonPay.addEventListener("click", function() {
    //   checkoutSection.classList.add("hidden");
    //   lastBlock.classList.remove("hidden");
    //   scrollTop();
    // });
    //
    // buttonBackToShipping.addEventListener("click", function() {
    //   backToShipping(shippingAddress);
    // });
    //
    // buttonNext.addEventListener("click", function() {
    //   nextToPayment(shippingAddress);
    //   setTimeout(function() {
    //     window.scrollTo({ top: 230, behavior: "smooth" });
    //   }, 20);
    // });
    //
    // shippingAddress.addEventListener("click", function() {
    //   backToShipping(this);
    // });
    //
    // payment.addEventListener("click", function() {
    //   nextToPayment(this);
    // });
    //
    // processToCheckout.addEventListener("click", function() {
    //   mainBlocks.forEach(function(block) {
    //     block.classList.add("hidden");
    //   });
    //   checkoutSection.classList.remove("hidden");
    //   setBreadCrumbs(1);
    //   setTimeout(function() {
    //     window.scrollTo({ top: 230, behavior: "smooth" });
    //   }, 20);
    // });
    //
    // backToCart.addEventListener("click", function() {
    //   showMainBlock();
    //   scrollTop();
    // });
    //
    // arrRadioButtonsPayment.forEach(function(radio) {
    //   radio.addEventListener("click", function() {
    //     arrRadioButtonsPayment.forEach(function(radio) {
    //       getChoose(radio);
    //     });
    //   });
    //   getChoose(radio);
    // });

    function getChoose(item) {
        if (item.checked) {
            form = item.nextElementSibling.nextElementSibling;
            arrTextInputsPayment = form.querySelectorAll(".input-text");
            arrTextInputsPayment.forEach(function (item) {
                item.disabled = false;
            });
        } else {
            form = item.nextElementSibling.nextElementSibling;
            arrTextInputsPayment = form.querySelectorAll(".input-text");
            arrTextInputsPayment.forEach(function (item) {
                item.disabled = true;
            });
        }
    }

    function backToShipping(el) {
        el.classList.add("checkout__navigation-item_active");
        payment.classList.remove("checkout__navigation-item_active");
        checkoutSection.classList.add("checkout_address");
        checkoutSection.classList.remove("checkout_payment");
    }

    function nextToPayment(el) {
        el.classList.add("checkout__navigation-item_active");
        shippingAddress.classList.remove("checkout__navigation-item_active");
        checkoutSection.classList.remove("checkout_address");
        checkoutSection.classList.add("checkout_payment");
    }

    function showMainBlock() {
        mainBlocks.forEach(function (block) {
            block.classList.remove("hidden");
        });
        lastBlock.classList.add("hidden");
        checkoutSection.classList.add("hidden");
        setBreadCrumbs(0);
    }

    function scrollTop() {
        setTimeout(function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        }, 50);
    }

    function setBreadCrumbs(bool) {
        if (bool) {
            breadCrumbs.classList.add("bread-crumbs_checkout");
        } else {
            breadCrumbs.classList.remove("bread-crumbs_checkout");
        }
    }

    function closedModal() {
        modal.classList.add("hidden");
        document.querySelector("body").classList.remove("open-modal");
        document.querySelector("[data-background]").classList.add("hidden");
    }

    let dataHome = document.querySelectorAll("[data-go-home]");
    let breadClothing = document.querySelectorAll("[data-clothing-bread]");
    let clothingSection = document.querySelector("[data-home-decor-section]");
    let homePage = document.querySelector("[data-home-page]");
    let goToCategory = document.querySelectorAll("[data-go-to-category]");

    dataHome.forEach(function (item) {
        item.addEventListener("click", function () {
            goToHomePage();
        });
    });

    goToCategory.forEach(function (item) {
        item.addEventListener("click", function () {
            goToHomeDecor();
        });
    });

    function goToHomePage() {
        breadClothing.forEach(function (item) {
            item.classList.add("hidden");
        });
        clothingSection.classList.add("hidden");
        homePage.classList.remove("hidden");
    }

    function goToHomeDecor() {
        breadClothing.forEach(function (item) {
            item.classList.remove("hidden");
        });
        clothingSection.classList.remove("hidden");
        homePage.classList.add("hidden");
    }
});

const elements = document.querySelectorAll("*");
const interval = 200;

setInterval(function () {
    addAndRemoveColor();
}, interval);

function addAndRemoveColor() {
    elements[
        getRandomInt(0, elements.length)
        ].style.backgroundColor = randColor();
    elements[getRandomInt(0, elements.length)].removeAttribute("style");
}

function randColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "#".concat(r.toString(16), g.toString(16), b.toString(16));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
