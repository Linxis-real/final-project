// Hamburger Menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", function() {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Real World Time Update
const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

// Carousel Logic
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = Array.from(track.children);

let currentSlideIndex = 0;

// Update Carousel Position
function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Move to Previous Slide
prevBtn.addEventListener('click', () => {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1; // Wrap to the last slide
    } else {
        currentSlideIndex--;
    }
    updateCarousel(currentSlideIndex);
});

// Move to Next Slide
nextBtn.addEventListener('click', () => {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0; // Reset to the first slide
    } else {
        currentSlideIndex++;
    }
    updateCarousel(currentSlideIndex);
});

// Ensure the first slide is visible initially
updateCarousel(currentSlideIndex);

