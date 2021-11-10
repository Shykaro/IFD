var Script;
(function(Script) {

    function modulo(number, mod) {
        let result = number % mod;
        if (result < 0) {
            result += mod;
        }
        return result;
    }

    function setUpCarousel(carousel) {
        function handleNext() {
            currentSlide = modulo(currentSlide + 1, numSlides);
            changeSlide(currentSlide);
            if (currentSlide == 0) {
                document.getElementById("slide1").style.transform = "scaleX(100%)";
                document.getElementById("slide2").style.transform = "scaleX(50%)";
                document.getElementById("slide3").style.transform = "scaleX(50%)";
            }
            if (currentSlide == 1) {
                document.getElementById("slide1").style.transform = "scaleX(50%)";
                document.getElementById("slide2").style.transform = "scaleX(100%)";
                document.getElementById("slide3").style.transform = "scaleX(50%)";
            }
            if (currentSlide == 2) {
                document.getElementById("slide1").style.transform = "scaleX(50%)";
                document.getElementById("slide2").style.transform = "scaleX(50%)";
                document.getElementById("slide3").style.transform = "scaleX(100%)";
            }
        }

        function handlePrevious() {
            currentSlide = modulo(currentSlide - 1, numSlides);
            changeSlide(currentSlide);
            if (currentSlide == 0) {
                document.getElementById("slide1").style.transform = "scaleX(100%)";
                document.getElementById("slide2").style.transform = "scaleX(50%)";
                document.getElementById("slide3").style.transform = "scaleX(50%)";
            }
            if (currentSlide == 1) {
                document.getElementById("slide1").style.transform = "scaleX(50%)";
                document.getElementById("slide2").style.transform = "scaleX(100%)";
                document.getElementById("slide3").style.transform = "scaleX(50%)";
            }
            if (currentSlide == 2) {
                document.getElementById("slide1").style.transform = "scaleX(50%)";
                document.getElementById("slide2").style.transform = "scaleX(50%)";
                document.getElementById("slide3").style.transform = "scaleX(100%)";
            }
        }

        function changeSlide(slideNumber) {
            carousel.style.setProperty('--current-slide', slideNumber);
        }

        // get elements
        const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
        const buttonNext = carousel.querySelector('[data-carousel-button-next]');
        const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

        // carousel state we need to remember
        let currentSlide = 0;
        const numSlides = slidesContainer.children.length;

        // set up events
        buttonPrevious.addEventListener('click', handlePrevious);
        buttonNext.addEventListener('click', handleNext);
        //handleNext(); falls erste karte geskipped werden soll

    }

    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(setUpCarousel);



    class Carousel {
        constructor(carousel) {
            // find elements
            this.carousel = carousel;
            this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
            this.buttonNext = carousel.querySelector('[data-carousel-button-next]');
            this.slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

            // state
            this.currentSlide = 0;
            this.numSlides = this.slidesContainer.children.length;

            // add events
            this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
            this.buttonNext.addEventListener('click', this.handleNext.bind(this));


        }


        handleNext() {
            this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
            this.carousel.style.setProperty('--current-slide', this.currentSlide);

        }

        handlePrevious() {
            this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
            this.carousel.style.setProperty('--current-slide', this.currentSlide);
        }
    }



})(Script || (Script = {}));