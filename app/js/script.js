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
    homeDecorLi = document.querySelector("[data-li]"),
    homeDecorItem = document.querySelector("[data-home-decor-item]"),
    liInfBlock = document.querySelector("[data-li-inf]");

// window.addEventListener("DOMContentLoaded", function() {
//   homeDecorLi.addEventListener("click", function() {
//     liInfBlock.classList.contains("hidden")
//       ? liInfBlock.classList.remove("hidden")
//       : liInfBlock.classList.add("hidden");
//   });

// closeModalEl.addEventListener("click", function() {
//   closedModal();
// });

// backgroundWin.addEventListener("click", function() {
//   closedModal();
// });

// btnLogin.addEventListener("click", function() {
//   modal.classList.remove("hidden");
//   document.querySelector("body").classList.add("open-modal");
//   document.querySelector("[data-background]").classList.remove("hidden");
// });

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

//   function getChoose(item) {
//     if (item.checked) {
//       form = item.nextElementSibling.nextElementSibling;
//       arrTextInputsPayment = form.querySelectorAll(".input-text");
//       arrTextInputsPayment.forEach(function(item) {
//         item.disabled = false;
//       });
//     } else {
//       form = item.nextElementSibling.nextElementSibling;
//       arrTextInputsPayment = form.querySelectorAll(".input-text");
//       arrTextInputsPayment.forEach(function(item) {
//         item.disabled = true;
//       });
//     }
//   }

//   function backToShipping(el) {
//     el.classList.add("checkout__navigation-item_active");
//     payment.classList.remove("checkout__navigation-item_active");
//     checkoutSection.classList.add("checkout_address");
//     checkoutSection.classList.remove("checkout_payment");
//   }

//   function nextToPayment(el) {
//     el.classList.add("checkout__navigation-item_active");
//     shippingAddress.classList.remove("checkout__navigation-item_active");
//     checkoutSection.classList.remove("checkout_address");
//     checkoutSection.classList.add("checkout_payment");
//   }

//   function showMainBlock() {
//     mainBlocks.forEach(function(block) {
//       block.classList.remove("hidden");
//     });
//     lastBlock.classList.add("hidden");
//     checkoutSection.classList.add("hidden");
//     setBreadCrumbs(0);
//   }

//   function scrollTop() {
//     setTimeout(function() {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 50);
//   }

//   function setBreadCrumbs(bool) {
//     if (bool) {
//       breadCrumbs.classList.add("bread-crumbs_checkout");
//     } else {
//       breadCrumbs.classList.remove("bread-crumbs_checkout");
//     }
//   }

//   function closedModal() {
//     modal.classList.add("hidden");
//     document.querySelector("body").classList.remove("open-modal");
//     document.querySelector("[data-background]").classList.add("hidden");
//   }

//   let dataHome = document.querySelectorAll("[data-go-home]");
//   let breadClothing = document.querySelectorAll("[data-clothing-bread]");
//   let clothingSection = document.querySelector("[data-home-decor-section]");
//   let homePage = document.querySelector("[data-home-page]");
//   let goToCategory = document.querySelectorAll("[data-go-to-category]");

//   dataHome.forEach(function(item) {
//     item.addEventListener("click", function() {
//       goToHomePage();
//     });
//   });

//   goToCategory.forEach(function(item) {
//     item.addEventListener("click", function() {
//       goToHomeDecor();
//     });
//   });

//   function goToHomePage() {
//     breadClothing.forEach(function(item) {
//       item.classList.add("hidden");
//     });
//     clothingSection.classList.add("hidden");
//     homePage.classList.remove("hidden");
//   }

//   function goToHomeDecor() {
//     breadClothing.forEach(function(item) {
//       item.classList.remove("hidden");
//     });
//     clothingSection.classList.remove("hidden");
//     homePage.classList.add("hidden");
//   }
// });

// const elements = document.querySelectorAll("*");
// const interval = 200;

// setInterval(function () {
//     addAndRemoveColor();
// }, interval);

// function addAndRemoveColor() {
//     elements[
//         getRandomInt(0, elements.length)
//         ].style.backgroundColor = randColor();
//     elements[getRandomInt(0, elements.length)].removeAttribute("style");
// }

// function randColor() {
//     let r = Math.floor(Math.random() * 256),
//         g = Math.floor(Math.random() * 256),
//         b = Math.floor(Math.random() * 256);
//     return "#".concat(r.toString(16), g.toString(16), b.toString(16));
// }

// const products = [
//   {
//     src: "assets/img/main3.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/main3.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/main3.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/layer3.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/layer2.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/layer1.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/main.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/main3.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   },
//   {
//     src: "assets/img/main4.jpg",
//     name: "Product Name Here",
//     supplier: "Supplier’s Name Here",
//     price: "$29,354.75"
//   }
// ];

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomElement(arr, randInt) {
//   let randElement = arr[randInt];
//   arr.splice(randInt, 1);
//   return randElement;
// }

// function createRandomElement() {
//   console.log(randomProduct);
//   let randomProduct = getRandomElement(
//     products,
//     getRandomInt(0, products.length)
//   );
//   let newAricle = document.createElement("article");
//   newAricle.classList.add();
// }

// (function() {
//   let blocksGeneration = {
//     locations: [
//       document.getElementsByClassName("content-top"),
//       document.getElementsByClassName("content-center"),
//       document.getElementsByClassName("content-bottom")
//     ],
//     minValue: 0,
//     maxValue: products.length,
//     getRandomInt(min, max) {
//       let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
//       return randomInt;
//     },
//     getRandomElement(arrayObjects) {
//       let randomInt = this.getRandomInt(this.minValue, this.maxValue);
//       let randomElement = arrayObjects[randomInt];
//       arrayObjects.splice(randomInt, 1);
//       return randomElement;
//     },
//     createArticle(location, element) {
//       if (location) {
//         if (location[0].classList.contains("content-top")) {
//           let article = document.createElement("article");
//           article.className = "content-top__item";
//           article.innerHTML = `
//                   <img class="home-page__img home-page__img_top" src="${element.src}" alt="">
//                     <div class="category-product__inf">
//                         <span class="category-product__supplier block">${element.supplier}</span>
//                         <a href="#" class="category-product__name block">${element.name}</a>
//                         <span class="category-product__price block">${element.price}</span>
//                     </div>
//                 `;
//           location[0].appendChild(article);
//         } else if (location[0].classList.contains("content-center")) {
//           this.getRandomInt(0, 1);
//           if (1) {
//             let div = location[0].querySelector(".content-center__left");
//             createCenterItem(div, element);
//           } else {
//             let div = location[0].querySelector(".content-center__right");
//             createCenterItem(div, element);
//           }
//           function createCenterItem(div, product) {
//             let article = document.createElement("article");
//             article.className = "content-center__item";
//             article.innerHTML = `
//                        <img class="home-page__img" src="${product.src}" alt="">
//                         <div class="category-product__inf">
//                             <span class="category-product__supplier block">${product.supplier}</span>
//                             <a href="#" class="category-product__name block">${product.name}</a>
//                             <span class="category-product__price block">${product.price}</span>
//                     `;
//             div.appendChild(article);
//           }
//         } else {
//           let article = document.createElement("article");
//           article.className = "content-bottom__item";
//           article.innerHTML = `
//                    <img class="home-page__img " src="${element.src}" alt="">
//                     <div class="category-product__inf">
//                         <span class="category-product__supplier block">${element.supplier}</span>
//                         <a href="#" class="category-product__name block">${element.name}</a>
//                         <span class="category-product__price block">${element.price}</span>
//                 `;
//           location[0].appendChild(article);
//         }
//       }
//     },
//     getRandomLocation(locationsArray) {
//       // console.log(locationsArray.length);
//       let randomInt = this.getRandomInt(0, locationsArray.length);
//       return this.locations[randomInt];
//     },
//     init() {
//       let amountOFElements = getRandomInt(0, products.length);
//       let countElements;
//       let usedElements;
//       do {
//         for (let i = 0; i < parseInt(amountOFElements); i++) {
//           let randomElement = this.getRandomElement(products);
//           let randomLocation = this.getRandomLocation(this.locations);
//           if (randomElement) {
//             this.createArticle(randomLocation, randomElement);
//             usedElements++;
//           }
//         }
//         countElements = products.length - usedElements;
//       } while (countElements > 0);
//     }
//   };
//   console.log(blocksGeneration.init());
// })();

let menuItems = [
    [
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers"
    ],
    [
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools"
    ],
    [
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers"
    ],
    [
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers"
    ],
    [
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools"
    ],
    [
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers"
    ],
    [
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools"
    ],
    [
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers"
    ],
    [
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools"
    ],
    [
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools"
    ]
];

let toggleMenu = function (element) {
    element.getAttribute("data-category");
};

let menu = document.querySelector("[data-li-inf]");

let categories = document.querySelector(".header-bottom__list");
categories.addEventListener("mouseover", function (e) {
    mouseOver(e)
});

function mouseOver(e) {
    let dd = e.target;
    let ed = e.currentTarget;
    let element = dd.closest("[data-category]");
    if (element !== null) {
        setTimeout(function () {
            if (element.getAttribute('data-category') < 7) {
                menu.setAttribute('style', `left : ${getXCoordinates(element)}px`);
            } else {
                menu.setAttribute('style', `left : ${getXCoordinates(element) - 590}px`);
            }
            pushElements(element.getAttribute("data-category"));
            openMEnu()
        }, 50)
    }
}

function pushElements(id) {
    let ul = document.querySelector(".li-inf__bottom");
    ul.innerHTML = "";
    createMenuList(menuItems[id], ul)
}

document.addEventListener("mouseout", e => {
    mouseOut(e)
});

function mouseOut(e) {
  let target = e.target;
  let its_infBlock = target === liInfBlock || liInfBlock.contains(target);
  let its_decorLi = target === homeDecorLi || homeDecorLi.contains(target);
  if (!its_infBlock && !its_decorLi) {
    setTimeout(function () {
      closeMenu()
    }, 50)
  }
}

function getXCoordinates(element) {
    let x = element.getBoundingClientRect();
    return x.left + pageXOffset;
}

function openMEnu() {
    menu.classList.remove("hidden");
}

function closeMenu() {
    liInfBlock.classList.add("hidden");
    let ul = document.querySelector(".li-inf__bottom");
    ul.innerHTML = "";
}

function createMenuList(array, element) {

 array.forEach(function (text) {
    // let li = document.createElement("li");
    // // let text = document.createT
    // li.innerHTML = `<li data-go-to-category class="li-inf__category"><a href="#">${item}</a></li>`;
    // element.appendChild(li);
   let templateLi = document.querySelector('#li-item');
   let li = templateLi.content.querySelector('.li-inf__category');
   li.textContent = text;
   let clone = document.importNode(templateLi.content, true);
   menu.querySelector('ul').appendChild(clone)
  });
}


