
export function toggleMenu() {
    
    
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
        "Pressure Cookers",
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
        "Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
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
        "Pots & Pans","Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools",
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
        "Kitchen Tools","Kitchen Tools",
        "Pressure Cookers",
        "Beds",
        "Pots & Pans",
        "Kitchen Tools","Kitchen Tools",
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
  categories.addEventListener("mouseover", mouseOver);
  
  function mouseOver(e) {
    let dd = e.target;
    let element = dd.closest("[data-category]");
    if (element !== null) {
        setTimeout(function () {
            if (element.getAttribute('data-category') < 6) {
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
    createMenuList(menuItems[id])
  }
  
  document.addEventListener("mouseout", mouseOut);
  let homeDecorLi = document.querySelector("[data-li]");
    let liInfBlock = document.querySelector("[data-li-inf]");
    
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
  
  function createMenuList(array) {
  
  array.forEach(function (text) {
   let templateLi = document.querySelector('#li-item');
   let li = templateLi.content.querySelector('.li-inf__category');
   li.textContent = text;
   let clone = document.importNode(templateLi.content, true);
   menu.querySelector('ul').appendChild(clone)
  });
  }
}

