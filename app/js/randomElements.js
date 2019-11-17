export function generateRandomElements(arrayProducts) {


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    let blocksGeneration = {
        locations: [
            document.getElementsByClassName("content-top"),
            document.getElementsByClassName("content-center"),
            document.getElementsByClassName("content-bottom")
        ],
        locationMain: document.querySelector('.home-decor .category-products'),
        minValue: 0,
        maxValue: arrayProducts.length,
        getRandomInt(min, max) {
            let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomInt;
        },
        getRandomElement(arrayObjects) {
            let randomInt = this.getRandomInt(this.minValue, this.maxValue);
            let randomElement = arrayObjects[randomInt];
            arrayObjects.splice(randomInt, 1);
            return randomElement;
        },
        createArticle(location, element) {
            // if (this.locationMain) {
                // if (location[0].classList.contains("content-top")) {
            console.log(this.locationMain)
                    let article = document.createElement("article");
                    article.className = "category-product";
                    article.innerHTML = `
                  <img class="category-product__img" src="${element.src}" alt="">
                    <div class="category-product__inf">
                        <span class="category-product__supplier block">${element.supplier}</span>
                        <a href="#" class="category-product__name block">${element.name}</a>
                        <span class="category-product__price block">${element.price}</span>
                    </div>
                `;
                    this.locationMain.appendChild(article);
                // } else if (location[0].classList.contains("content-center")) {
                //     this.getRandomInt(0, 1);
                //     if (1) {
                //         let div = location[0].querySelector(".content-center__left");
                //         createCenterItem(div, element);
                //     } else {
                //         let div = location[0].querySelector(".content-center__right");
                //         createCenterItem(div, element);
                //     }
                //
                //     function createCenterItem(div, product) {
                //         let article = document.createElement("article");
                //         article.className = "content-center__item";
                //         article.innerHTML = `
                //        <img class="home-page__img" src="${product.src}" alt="">
                //         <div class="category-product__inf">
                //             <span class="category-product__supplier block">${product.supplier}</span>
                //             <a href="#" class="category-product__name block">${product.name}</a>
                //             <span class="category-product__price block">${product.price}</span>
                //     `;
                //
                //         if (div) {
                //             div.appendChild(article)
                //         }
                //     }
                // } else {
                //     let article = document.createElement("article");
                //     article.className = "content-bottom__item";
                //     article.innerHTML = `
                //    <img class="home-page__img " src="${element.src}" alt="">
                //     <div class="category-product__inf">
                //         <span class="category-product__supplier block">${element.supplier}</span>
                //         <a href="#" class="category-product__name block">${element.name}</a>
                //         <span class="category-product__price block">${element.price}</span>
                // `;
                //     location[0].appendChild(article);
                // }
            // }
        },
        getRandomLocation(locationsArray) {
            // console.log(locationsArray.length);
            let randomInt = this.getRandomInt(0, locationsArray.length);
            return this.locations[randomInt];
        },
        init() {
            let amountOFElements = getRandomInt(0, arrayProducts.length);
            let countElements;
            let usedElements;
            do {
                for (let i = 0; i < parseInt(amountOFElements); i++) {
                    let randomElement = this.getRandomElement(arrayProducts);
                    let randomLocation = this.getRandomLocation(this.locations);
                    if (randomElement) {
                        this.createArticle(randomLocation, randomElement);
                        usedElements++;

                    }
                }
                countElements = arrayProducts.length - usedElements;
            } while (countElements > 0);
        }
    };
    blocksGeneration.init();
}