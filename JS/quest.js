const slides = document.querySelectorAll('.sandSlides img');
let slideIndex = 0;
let intervalID = null;
let sandDescription = document.querySelector('.sandDescription');

const templeEslides = document.querySelectorAll('.templeESlides img');
let templeEslideIndex = 0;
let templeEintervalID = null;
let templeEDescription = document.querySelector('.templeEDescription');

const templeIslides = document.querySelectorAll('.templeISlides img');
let templeIslideIndex = 0;
let templeIintervalID = null;
let templeIDescription = document.querySelector('.templeIDescription');

const landscapeslides = document.querySelectorAll('.landscapeSlides img');
let landscapeslideIndex = 0;
let landscapeintervalID = null;

let levelBeat = document.querySelector(`.levelBeat`);
let flowButton = document.querySelector(`.flowButton`);


document.addEventListener("DOMContentLoaded", initializeSlider);
document.addEventListener("DOMContentLoaded", templeEinitializeSlider);
document.addEventListener("DOMContentLoaded", templeIinitializeSlider);





function pauseFlow(){
    levelBeat.classList.add('pause');
}

function resumeFlow(){
    levelBeat.classList.remove('pause');
}

const material1 = document.querySelector('#material1');
const material2 = document.querySelector('#material2');
const materialTransitionButton = document.querySelector('.materialTransitionButton');

function materialTransition(){

    
    if(materialTransitionButton.textContent == 'After'){
        material1.style.opacity = '1';
        material2.style.opacity = '0';
        materialTransitionButton.textContent = 'Before';
    }
    else if(materialTransitionButton.textContent == 'Before'){
        material1.style.opacity = '0';
        material2.style.opacity = '1';
        materialTransitionButton.textContent = 'After';
        }

}

const laser1 = document.querySelector('#laser1');
const laser2 = document.querySelector('#laser2');
const laserTransitionButton = document.querySelector('.laserTransitionButton');

function laserTransition(){

    
    if(laserTransitionButton.textContent == 'After'){
        laser1.style.opacity = '1';
        laser2.style.opacity = '0';
        laserTransitionButton.textContent = 'Before';
    }
    else if(laserTransitionButton.textContent == 'Before'){
        laser1.style.opacity = '0';
        laser2.style.opacity = '1';
        laserTransitionButton.textContent = 'After';
        }

}

function initializeSlider(){
    if(slides.length > 0){
slides[slideIndex].classList.add('displaySlide');
intervalID = setInterval(sandNextSlide, 10000);
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
    if(slideIndex === 0){
        sandDescription.textContent = `Different regions vary in sand color, this color is the chosen shade of 
                the sand`;
    }
    else if (slideIndex === 1){
        sandDescription.textContent = `Red/brown rocky cliffs alongside sand and foggy atmosphere`;
    }
    else if (slideIndex === 2){
        sandDescription.textContent = `Sandstorm will surrounded the desert village and ruins to represent sand dust/fog`;
    } else if (slideIndex === 3){
        sandDescription.textContent = `Desert Village occupied with houses flat roofs`;
    }

    }



function sandPrevSlide(){
    clearInterval(intervalID);
slideIndex--;
showSlide(slideIndex);
}

function sandNextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

//TEMPLE EXTERIOR

function templeEinitializeSlider(){
    if(templeEslides.length > 0){
        templeEslides[templeEslideIndex].classList.add('displaySlide');
        templeEintervalID = setInterval(templeEnextSlide, 10000);
    }
}
function templeEshowSlide(index){

    if(index >= templeEslides.length){
        templeEslideIndex = 0;
    }

    else if (index < 0){
        templeEslideIndex = templeEslides.length - 1;
    }

    templeEslides.forEach(templeEslide =>{
        templeEslide.classList.remove('displaySlide');
    });
    templeEslides[templeEslideIndex].classList.add('displaySlide');
    if(templeEslideIndex === 0){
        templeEDescription.textContent = `Petra archaeological site in Jordan. The Temple will be covered in sand cliffs`;
    }
    else if (templeEslideIndex === 1){
        templeEDescription.textContent = `Main Temple exterior design for the front and back of the building`;
    }
    else if (templeEslideIndex === 2){
        templeEDescription.textContent = `A staircase of rocky sands that leads to the temple entrance.`;
    } else if (templeEslideIndex === 3){
        templeEDescription.textContent = `Sand covered archeological site`;
    }

    }



function templeEprevSlide(){
    clearInterval(templeEintervalID);
    templeEslideIndex--;
    templeEshowSlide(templeEslideIndex);
}

function templeEnextSlide(){
    templeEslideIndex++;
    templeEshowSlide(templeEslideIndex);
}

//TEMPLE INTERIOR

function templeIinitializeSlider(){
    if(templeIslides.length > 0){
        templeIslides[templeIslideIndex].classList.add('displaySlide');
        templeIintervalID = setInterval(templeInextSlide, 10000);
    }
}

function templeIshowSlide(index){

    if(index >= templeIslides.length){
        templeIslideIndex = 0;
    }

    else if (index < 0){
        templeIslideIndex = templeIslides.length - 1;
    }

    templeIslides.forEach(templeIslide =>{
        templeIslide.classList.remove('displaySlide');
    });

    templeIslides[templeIslideIndex].classList.add('displaySlide');
    if(templeIslideIndex === 0){
        templeIDescription.textContent = `Temple will have columns/pillars`;
    }
    else if (templeIslideIndex === 1){
        templeIDescription.textContent = `The floor of the temple will be surrounded with a body of water`;
    }
    else if (templeIslideIndex === 2){
        templeIDescription.textContent = `The placement of the relic will be placed by a statue in the middle 
        of the final floor level with a path leading to it. .`;

    }

}

function templeIprevSlide(){
    clearInterval(templeIintervalID);
    templeIslideIndex--;
    templeIshowSlide(templeIslideIndex);
}

function templeInextSlide(){
    templeIslideIndex++;
    templeIshowSlide(templeIslideIndex);
}

//landscape changes

landscapeslides[0].classList.add('displaySlide');
document.addEventListener("DOMContentLoaded", landscapeinitializeSlider);


function landscapeinitializeSlider(){
    if(landscapeslides.length > 0){
landscapeslides[landscapeslideIndex].classList.add('displaySlide');
landscapeintervalID = setInterval(landscapenextSlide, 30000);
}
}

function landscapeshowSlide(index){

    if(index >= landscapeslides.length){
        landscapeslideIndex = 0;
    }

    else if (index < 0){landscapeslideIndex
        landscapeslideIndex = landscapeslides.length - 1;
    }

    landscapeslides.forEach(slide =>{
        slide.classList.remove('displaySlide');
    });
    landscapeslides[landscapeslideIndex].classList.add('displaySlide');

}

function landscapeprevSlide(){
    clearInterval(landscapeintervalID);
landscapeslideIndex--;
landscapeshowSlide(landscapeslideIndex);
}

function landscapenextSlide(){
    landscapeslideIndex++;
    landscapeshowSlide(landscapeslideIndex);
}