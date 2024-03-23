const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector("right-slide");

const slideLeft = document.querySelector("left-slide");

const upButton = document.querySelector("#up-btn");

const downButton = document.querySelector('#down-btn');

const sliderLength = document.querySelectorAll('div');

let activesSlideIndex = 0;
slideLeft.style.top =`-${(sliderLength - 1) * 100}vh`

upButton.addEventListener("click", () => nextSlide ('up'))
upButton.addEventListener("click", () => nextSlide('down'))

function nextSlide (params){
    const sliderHeight = sliderContainer.clientHeight;

    if(params === 'up') {
        activesSlideIndex++

        if(activesSlideIndex > sliderLength -1){
            activesSlideIndex =0;
        }
    }

    if(params === "down") {

        activesSlideIndex--;
        if(activesSlideIndex < 0){
            activesSlideIndex = sliderLength -1;
        }
    }
    slideRight.style.transform =`translateY(-${activesSlideIndex*sliderHeight}px)`;
    slideLeft.style.transform =`translateY(${activesSlideIndex*sliderHeight}px)`
}