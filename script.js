const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");
console.log("filter")
console.log(btns.length)

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter)

        storeProducts.forEach((product) => {
            if (filter == "all") {
                product.style.display = "block"
            }
            else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block"
                }
                else {
                    product.style.display = "none"
                }
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    function showNextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 3000);
});