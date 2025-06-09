const lab1 = document.querySelector('#lab1');
const lab2 = document.querySelector('#lab2');
const transitionButton = document.querySelector('.transitionButton');

function transition(){

    
    if(transitionButton.textContent == 'After'){
        lab1.style.opacity = '1';
        lab2.style.opacity = '0';
        transitionButton.textContent = 'Before';
    }
    else if(transitionButton.textContent == 'Before'){
        lab1.style.opacity = '0';
        lab2.style.opacity = '1';
        transitionButton.textContent = 'After';
        }

}




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