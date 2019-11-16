export function generateRandomElements() {
    const products = [
  {
    src: "assets/img/main3.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/main3.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/main3.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/layer3.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/layer2.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/layer1.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/main.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/main3.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  },
  {
    src: "assets/img/main4.jpg",
    name: "Product Name Here",
    supplier: "Supplier’s Name Here",
    price: "$29,354.75"
  }
];

// const arrProducts = {};

let arrProducts;

function getData(url, method) {
    const request = new XMLHttpRequest();
    const url = 'http://localhost:3000/data/products.json';
    request.open('GET', url);
    console.log(request)
    request.addEventListener('readystatechange', function(data) {
        if (request.responseText) {
            data = JSON.parse(request.responseText)
            return data
    
        }
    })
    request.send()
    return data;
}



async function render() {

}


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
//     maxValue: arrProducts.length,
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
//       let amountOFElements = getRandomInt(0, arrProducts.length);
//       let countElements;
//       let usedElements;
//       do {
//         for (let i = 0; i < parseInt(amountOFElements); i++) {
//           let randomElement = this.getRandomElement(arrProducts);
//           let randomLocation = this.getRandomLocation(this.locations);
//           if (randomElement) {
//             this.createArticle(randomLocation, randomElement);
//             usedElements++;
        
//           }
//         }
//         countElements = arrProducts.length - usedElements;
//       } while (countElements > 0);
//     }
//   };
//   blocksGeneration.init();
// })();
}