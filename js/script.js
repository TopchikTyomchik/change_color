"use strict"
const buttonElement = document.querySelector(".main-block__btn");
const bodyElement = document.body;
const hexcodeElement = document.querySelector(".hex-code span");



let indexHex = ['0','1','2','3','4','5','6','7','8','9', 'A','B','C','D','E','F'];

function generateHexColor() {
   let hexColor = "#";
   for (let i = 0; i < 6; i++) {
      hexColor +=  indexHex[getRandomIndexHex()] 
   }
   return hexColor;
}



function change() {

   bodyElement.style.backgroundColor = generateHexColor();
   hexcodeElement.innerHTML = generateHexColor();

}

function getRandomIndexHex() {
   return Math.floor(Math.random() * indexHex.length)
}

buttonElement.addEventListener("click", change)