// OUR PRODUCTS

const totalSlides = document.getElementsByClassName("Slide").length;
let currentSlideIndex = 0;
showSlides();

function showSlides() {
    if (currentSlideIndex < totalSlides) {
        let slides = document.getElementsByClassName("Slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlideIndex].style.display = "block";
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0;
    }
    setTimeout(showSlides, 2000);
}