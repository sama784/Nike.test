let carousel = document.querySelector('#SC-carousel'),
    nextSliderBtn = carousel.querySelector('button.next'),
    prevSliderBtn = carousel.querySelector('button.prev'),
    carouselSlide = carousel.querySelectorAll('.carousel-item');

nextSliderBtn.addEventListener("click", function () {
    let currentSlide = carousel.querySelector('.carousel-item.active'),
        nextSlide = currentSlide.nextElementSibling ?? carousel.querySelector(".carousel-item:first-child");

     currentSlide.classList.remove("active", "show");
    nextSlide.classList.add("active");

    setTimeout(() => {
        nextSlide.classList.add("show");
    }, 100);
});
prevSliderBtn.addEventListener("click", function () {
    let currentSlide = carousel.querySelector('.carousel-item.active'),
        prevSlide = currentSlide.previousElementSibling ?? carousel.querySelector(".carousel-item:last-child");

     currentSlide.classList.remove("active", "show");
    prevSlide.classList.add("active");

    setTimeout(() => {
        prevSlide.classList.add("show");
    }, 100);
});

window.addEventListener("DOMContentLoaded" , function (){
    carouselSlide[0].classList.add("active");
    
    setTimeout(function(e){
        carouselSlide[0].classList.add("show");

    },100)

})