
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) =>{




container.style.setProperty('--position', `${e.target.value}%`);
})


hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

});

const slides = document.querySelectorAll('.artContent img');
let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
slides[slideIndex].classList.add('displaySlide');
intervalID = setInterval(nextSlide, 5000);
}
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }

    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');

}

function prevSlide(){
    clearInterval(intervalID);
slideIndex--;
showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}