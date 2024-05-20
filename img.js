/*
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel img');
const imageWidth = carousel.offsetWidth;
let currentPosition = 0;

function slideToNext() {
    currentPosition -= imageWidth;
    if (currentPosition < -imageWidth * (carouselImages.length - 1)) {
        currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}px)`;
}

setInterval(slideToNext, 3000);

 */


const carousel = document.querySelector('.carousel');
const carouselContainers = Array.from(document.querySelectorAll('.carousel .carousel-container'));
const positions = carouselContainers.map(() => 0); // Initialize positions for each carousel container

function slideToNext() {
    carouselContainers.forEach((carouselContainer, index) => {
        const carouselImages = carouselContainer.querySelectorAll('img');
        const imageWidth = carousel.offsetWidth;

        positions[index] -= imageWidth;
        if (positions[index] < -imageWidth * (carouselImages.length - 1)) {
            positions[index] = 0;
        }
        carouselContainer.style.transform = `translateX(${positions[index]}px)`;
    });
}

setInterval(slideToNext, 3000);