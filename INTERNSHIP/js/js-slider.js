//slider show for javascrip starts here
let sliderContainer = document.querySelector(".slider-container");
let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");
let slideWidth = slides[0].clientWidth;

let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    slideIndex = index;

    // Update indicators
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

setInterval(nextSlide, 3000); // Auto-advance every 3 seconds