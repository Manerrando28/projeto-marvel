// JavaScript for image carousel with slideshow

const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = carouselImages.children.length;
const imageWidth = carouselImages.children[0].clientWidth;
let slideInterval;

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Function to show the previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Function to start slideshow
function startSlideshow() {
    slideInterval = setInterval(showNextImage, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Function to stop slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Event listener for previous button click
prevBtn.addEventListener('click', () => {
    stopSlideshow(); // Stop slideshow when user manually navigates
    showPreviousImage();
});

// Event listener for next button click
nextBtn.addEventListener('click', () => {
    stopSlideshow(); // Stop slideshow when user manually navigates
    showNextImage();
});

// Start slideshow when page loads
startSlideshow();
