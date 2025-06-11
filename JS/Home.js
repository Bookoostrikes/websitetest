const imageEvo = document.querySelector('#evogami');
const gifEvo = document.querySelector('#evogamiVid');
const evoFlex = document.querySelector('#evoFlex ');

const imageSoul = document.querySelector('#soul');
const gifSoul = document.querySelector('#soulVid');
const soulFlex = document.querySelector('#soulFlex');

const imageQuest = document.querySelector('#quest');
const gifQuest = document.querySelector('#questVid');
const questFlex = document.querySelector('#questFlex');




const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

gifQuest.addEventListener('mouseover', function(){
    questFlex.style.opacity = '0.9';

});

gifQuest.addEventListener('mouseout', function(){
    questFlex.style.opacity = '0';

});


gifEvo.addEventListener('mouseover', function(){
    evoFlex.style.opacity = '0.9';

});

gifEvo.addEventListener('mouseout', function(){
    evoFlex.style.opacity = '0';

});


gifSoul.addEventListener('mouseover', function(){
    soulFlex.style.opacity = '0.9';

});

gifSoul.addEventListener('mouseout', function(){
    soulFlex.style.opacity = '0';

});



hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

});






