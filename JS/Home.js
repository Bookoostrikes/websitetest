const imageEvo = document.querySelector('#evogami');
const gifEvo = document.querySelector('#evogamiVid');
const flexBox = document.querySelector('.flexBox');

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');




gifEvo.addEventListener('mouseover', function(){
    flexBox.style.opacity = '0.9';

});

gifEvo.addEventListener('mouseout', function(){
    flexBox.style.opacity = '0';

});

hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

});






